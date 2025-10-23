// Initialize the Leaflet map
var map = L.map('map').setView([51.5074, -0.1278], 10); // Initial center at London, zoom level 10

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add Marker 1 (London)
var marker1 = L.marker([51.5074, -0.1278]).addTo(map);
marker1.bindPopup("<b>London</b><br>Capital city of the UK").openPopup();

// Add Marker 2 (Paris)
var marker2 = L.marker([48.8566, 2.3522]).addTo(map);
marker2.bindPopup("<b>Paris</b><br>Capital city of France").openPopup();





