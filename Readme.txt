# Leaflet_CT_Orchards
Assignment 6: An Interactive Map with leaflet and OpenStreetMap

In this assignment we use the Leaflet JS  library and OpenStreetMap map tiles to visualize geographic patterns in  CT Apple Grower data, which is available from data.ct.gov. The primary goal of this assignment is to highlight at least one geographic pattern in the dataset using a tiled image backend (Leaflet) to display the data.  We generate two interactive leaflet maps: 

1. A Simple Interactive Leaflet Map of CT Orchards:
   The map is dynamically fit according to latitudes and longitudes of CT orchards. Orchards are labelled with blue pin icons. When we click each individual pin, names and addresses of orchards will pop up.

2. An Orchard Map Clustered by the Leaflet.markercluster Plugin:
   Regional orchards are clustered together by the Leaflet.markercluster plugin. The number of orchards in each cluster are shown in circle markers. Clustering are automatically adjusted by zooming, which help the visualizers to focus on specific orchards in interested regions. Hovering the mouse over a cluster will highlight that area in a form of polygon and allow the zooming for the next level of clusters or singleton markers.

Public Data Source: 2013 CT Apple Growers List from data.ct.gov
https://catalog.data.gov/dataset/2013-apple-growers-list/resource/7156d198-ac92-48e2-9cd8-d9c0bb01a66f

Arpil 11, 2016
Minghu Song
http://songminghu2004.github.io/Leaflet_CT_Orchards/
