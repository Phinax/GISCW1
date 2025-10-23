// Initialize the Google Maps API map
function initMap() {
    var mapOptions = {
        center: {lat: 51.5074, lng: -0.1278}, // Center on London
        zoom: 10
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Add Marker 1 (London)
    var marker1 = new google.maps.Marker({
        position: {lat: 51.5074, lng: -0.1278}, // London coordinates
        map: map,
        title: 'London'
    });

    var infowindow1 = new google.maps.InfoWindow({
        content: '<h3>London</h3><p>Capital city of the UK</p>'
    });

    marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
    });

    // Add Marker 2 (Paris)
    var marker2 = new google.maps.Marker({
        position: {lat: 48.8566, lng: 2.3522}, // Paris coordinates
        map: map,
        title: 'Paris'
    });

    var infowindow2 = new google.maps.InfoWindow({
        content: '<h3>Paris</h3><p>Capital city of France</p>'
    });

    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
    });
}



