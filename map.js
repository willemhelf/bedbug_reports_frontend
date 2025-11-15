import { coordinates } from './index.js'

let marker

var map = L.map('map').setView([40.7306, -73.9352], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

for (var i = 0; i < coordinates.length; i++) {
        marker = new L.marker([coordinates[i][0], coordinates[i][1]]).bindPopup(coordinates[i][0]).addTo(map);
}