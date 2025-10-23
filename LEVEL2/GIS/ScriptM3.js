// Initialize the OpenLayers map
var map = new ol.Map({
    target: 'map',  // The target div id
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()  // OpenStreetMap layer
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([2.3522, 48.8566]), // Initial center at Paris
        zoom: 5  // Initial zoom level
    })
});

// Create marker 1 (London)
var marker1 = new ol.Overlay({
    position: ol.proj.fromLonLat([-0.1278, 51.5074]), // London coordinates
    positioning: 'center-center',
    element: document.createElement('div')
});
marker1.getElement().classList.add('marker');  // Add a class for the marker
map.addOverlay(marker1);

// Create marker 2 (Paris)
var marker2 = new ol.Overlay({
    position: ol.proj.fromLonLat([2.3522, 48.8566]), // Paris coordinates
    positioning: 'center-center',
    element: document.createElement('div')
});
marker2.getElement().classList.add('marker');
map.addOverlay(marker2);

// Create marker 3 (Berlin)
var marker3 = new ol.Overlay({
    position: ol.proj.fromLonLat([13.4050, 52.5200]), // Berlin coordinates
    positioning: 'center-center',
    element: document.createElement('div')
});
marker3.getElement().classList.add('marker');
map.addOverlay(marker3);
