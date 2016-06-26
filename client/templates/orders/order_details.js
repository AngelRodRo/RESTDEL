Meteor.startup(function () {
    GoogleMaps.load({
         v: '3',
         key:'AIzaSyDCuDW4JFxNCcgfTGxEdI-bwSmPtdW6ubI',
         libraries: 'geometry,places'
    });
})

Template.orderDetails.onCreated(function () {
    GoogleMaps.ready('detailsMap',function (map) {
        console.log("Ready");
        var latLng = Geolocation.latLng();

        myMarker = new google.maps.Marker({
          position: new google.maps.LatLng(latLng.lat, latLng.lng),
          draggable:true,
          map: map.instance
        });
    })
})

Template.orderDetails.events({
    'click .update-order'(event,template){
        let data ={
            address: template.find("[name='address']").value,
            phone: template.find("[name='phone']").value,
            position:{
                latitude: myMarker.position.lat(),
                longitude: myMarker.position.lng()
            }
        }

        Meteor.call('detailsOrder',data,function (err) {
            if(err) return toastr.error('Hubo un error al momento de actualizar la orden');
            Modal.hide('detailsOrder');
            Modal.show('waiting')
        })
    }
})

Template.orderDetails.helpers({
    exampleMapOptions() {
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
