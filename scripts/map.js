var harvard_yard_map;
/* John Harvard Status
42.374474,-71.117207 */

var statue_latlng = new google.maps.LatLng(42.374474, -71.117207);
var nWestBldg_latlng = new google.maps.LatLng(42.3795462,-71.1156024);

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: statue_latlng
    };
    harvard_yard_map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
    
    var statue_info = "<strong>John Harvard Statue</strong><br/>" +
        "<a href='https://www.summer.harvard.edu/inside-summer/3-lies-harvard'>3 Lies of Harvard</a>";
    
    var statue_infowindow = new google.maps.InfoWindow({
        content: statue_info
    });   
    
    var statue_marker = new google.maps.Marker({
      position: statue_latlng,
      map: harvard_yard_map,
      title: 'John Harvard Statue'
    });
    
    var building_marker = new google.maps.Marker({
      position: nWestBldg_latlng,
      map: harvard_yard_map,
      title: 'Northwest Building'
    });
    
    google.maps.event.addListener(statue_marker, 'click', function() {
      statue_infowindow.open(harvard_yard_map,statue_marker,building_marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);