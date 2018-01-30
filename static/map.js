
function loadMapFrom(url){
    var position = 
}

function initMap(position, zoom, div){
    var map = new google.maps.Map(document.getElementById(div), {
        zoom: zoom,
        center: position
      })
}

function addMarker(position, map){
    var marker = new google.maps.Marker({
        position: position,
        map: map
      });
}