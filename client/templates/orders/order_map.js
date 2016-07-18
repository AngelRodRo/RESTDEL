Meteor.startup(function () {
    GoogleMaps.load({
         v: '3',
         key:'AIzaSyDCuDW4JFxNCcgfTGxEdI-bwSmPtdW6ubI',
         libraries: 'geometry,places'
    });
})

Template.orderMap.onCreated(function () {

    Orders.find({'user.id':Meteor.userId(),isCompleted:false}).observe({
        changed:function (doc) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(doc.latitude,doc.longitude),
                map:GoogleMaps.maps.orderMap.instance
            })
        }
    })

    GoogleMaps.ready('orderMap',function (map) {
        console.log("Ready");
        var latLng = Geolocation.latLng();

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(latLng.lat, latLng.lng),
          map: map.instance
        });
    })
})

Template.orderMap.events({
    'click .cancel-order'(event,template){

        swal({
          title: 'Estas seguro que desea cancelar el pedido?',
          text: 'Esta orden ya no podra ser recuperada',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#dd6b55',
          cancelButtonColor: '#d44',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          closeOnConfirm: false
        }, function() {

            Meteor.call('orderDelete',function (err) {
                if(err) return toastr.error('Hubo un error al momento cancelar la orden')
                swal(
                  'Su orden se ha cancelado',
                  'Gracias por utilizar el servicio',
                  'success'
                );

                FlowRouter.go('/');
            })

        });
    }
})

Template.orderMap.helpers({
    nro(){
        return Orders.find({isCompleted:false}).fetch()[0].code;
    },
    exampleMapOptions: function() {
    // Make sure the maps API has loaded
    var latLng = Geolocation.latLng();
    // Initialize the map once we have the latLng.
    if (GoogleMaps.loaded() && latLng) {
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: 16
      };
    }
  }
})
