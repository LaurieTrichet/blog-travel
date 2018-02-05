
function addMap(lat, lon, zoom, div){
    var map = new google.maps.Map(document.getElementById(div), {
        zoom: zoom,
        center: {lat: lat, lng: lon}
      })
    return map
}

function addMarker(lat, lon , map){
    var marker = new google.maps.Marker({
        position: {lat: lat, lng: lon},
        map: map
      });
}