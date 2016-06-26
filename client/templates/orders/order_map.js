Meteor.startup(function () {
    GoogleMaps.load({
         v: '3',
         key:'AIzaSyDCuDW4JFxNCcgfTGxEdI-bwSmPtdW6ubI',
         libraries: 'geometry,places'
    });
})

Template.orderMap.onCreated(function () {


    GoogleMaps.ready('orderMap',function (map) {
        console.log("Ready");
        var latLng = Geolocation.latLng();

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(latLng.lat, latLng.lng),
          map: map.instance
        });
    })
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
