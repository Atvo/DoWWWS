function initMap() {
  var myLatLng = {lat: 60.187, lng: 24.820};
  var map;
  console.log(map);
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('gMap'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 14
  });
  console.log(map);
  console.log("Map");

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
}