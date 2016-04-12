//creates a new map, assigns it to the ‘map’ div for the 1st graph
var map = L.map( 'map');

////creates a new map, assigns it to the ‘map_cluster’ div for the 2nd graph
var map_cluster = L.map( 'map_cluster');

// adds tile layers to the 'map' and 'map_cluster' and specifies a set of tiles to display
function add_tileLayer( map )
{
   L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="https://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
       subdomains: ['otile1','otile2','otile3','otile4']
   }).addTo( map );
}
add_tileLayer( map_cluster );
add_tileLayer( map);

//L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
//    subdomains: ['otile1','otile2','otile3','otile4']
//}).addTo( map );

// returns the bounding box of markers for 'map' and 'map_cluster'
// dynamically sets the zoom level and fit the map to those markers
var bounds = L.latLngBounds(markers);
map.fitBounds(bounds)
map_cluster.fitBounds(bounds);

var myURL = jQuery( 'script[src$="leaf_ctapp.js"]' ).attr( 'src' ).replace( 'leaf_ctapp.js', '' );

var myIcon = L.icon({
    iconUrl: myURL + 'images/pin24.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

//creates a cluster group with the markerClusterGroup plugin
var markerClusters = L.markerClusterGroup();

//loops over the marker array to read data and call the Leaflet function to create markers for mapping
for ( var i = 0; i < markers.length; ++i )
{   
  //creates the popup labels for each markers when clicking
  var popup = '<b>Orchard Name: </b> ' + markers[i].name +
              '<br/><b>Street: </b> ' + markers[i].location12 +
              '<br/><b>City& Zipcode: </b> ' + markers[i].location132;
  
  //adds markers and lables into the 'markerClusters'
  var m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
                  .bindPopup( popup );

  markerClusters.addLayer( m );
  
  //adds markers and lables into the 'map' div
  L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
   .bindPopup( popup )
   .addTo( map );
}

map_cluster.addLayer( markerClusters );
