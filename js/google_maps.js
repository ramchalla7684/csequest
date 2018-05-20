document.addEventListener('DOMContentLoaded', function() {
  // navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
});

var myMarker;
var google_maps;

// function geoSuccess(location)
// {
//   myMarker = new google.maps.Marker({
//     position: {lat: location.coords.latitude, lng: location.coords.longitude},
//     map: google_maps,
//     animation: google.maps.Animation.BOUNCE
//     // icon: 'http://placehold.it/120x120&text=image1'
//   });
// }
//
// function geoError(error)
// {
//
// }

function initMap()
{
  var location = {lat: 17.4946, lng: 78.3921};
  google_maps = new google.maps.Map(document.getElementById('google_maps'), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: google_maps,
    title: 'JNTUH Quest, 2018',
    animation: google.maps.Animation.BOUNCE
    // icon: 'http://placehold.it/120x120&text=image1'
  });

  var toolTip = new google.maps.InfoWindow({
    content: '<h4>JNTUH Quest, 2018</h4>'
  });

  marker.addListener('click', function() {
    toolTip.open(google_maps, marker);
  });
}
//
// function getDirection()
// {
//
//   var directions_service = new google.maps.DirectionsService;
//   var directions_renderer = new google.maps.DirectionsRenderer;
//
//   directions_renderer.setMap(google_maps);
//
//           var onChangeHandler = function() {
//             calculateAndDisplayRoute(directions_service, directions_renderer);
//           };
// }
//
//
//       function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//         directionsService.route({
//           origin: document.getElementById('start').value,
//           destination: document.getElementById('end').value,
//           travelMode: 'DRIVING'
//         }, function(response, status) {
//           if (status === 'OK') {
//             directionsDisplay.setDirections(response);
//           } else {
//             window.alert('Directions request failed due to ' + status);
//           }
//         });
//       }
