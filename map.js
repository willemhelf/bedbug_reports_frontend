// //import { zips } from './index.js'

// function colorPick(d) {
//      return d.length > 2000 ? '#800026' :
//            d.length > 15000  ? '#BD0026' :
//            d.length > 1000  ? '#E31A1C' :
//            d.length > 500  ? '#FC4E2A' :
//            d.length > 300   ? '#FD8D3C' :
//            d.length > 100   ? '#FEB24C' :
//            d.length > 50   ? '#FED976' :
//                       '#FFEDA0';
// }

// function getZip(arr) {
//     arr.forEach(element => {
//         colorPick(element)
//     });
// }

// let mapStyle = function style(zip) {
//     return {
//         fillColor: colorPick(zip),
//         weight: 2,
//         opacity: 1,
//         color: 'white',
//         dashArray: '3',
//         fillOpacity: 0.7
//     };
// }



// var map = L.map('map').setView([40.7306, -73.9352], 13)

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     style: mapStyle(zips),
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// L.geoJson({style: mapStyle}).addTo(map);


// let marker
// let bronxLayer = L.layerGroup()
// let queensLayer = L.layerGroup()
// let statenIslandLayer = L.layerGroup()
// let manhattanLayer = L.layerGroup()
// let brooklynLayer = L.layerGroup()

// function bronxPoint(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         L.marker([arr[i][1], arr[i][2]]).addTo(bronxLayer)
//     }
// }

// function queensPoint(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         L.marker([arr[i][1], arr[i][2]]).addTo(queensLayer)
//     }
// }

// function statenPoint(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         L.marker([arr[i][1], arr[i][2]]).addTo(statenIslandLayer)
//     }
// }

// function manhattanPoint(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         L.marker([arr[i][1], arr[i][2]]).addTo(manhattanLayer)
//     }
// }

// function brooklynPoint(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         L.marker([arr[i][1], arr[i][2]]).addTo(brooklynLayer)
//     }
// }

// bronxPoint(bronx)
// queensPoint(queens)
// statenPoint(statenIsland)
// manhattanPoint(manhattan)
// brooklynPoint(brooklyn)

// var map = L.map('map').setView([40.7306, -73.9352], 13);
// var overlays = {
//     "Bronx": bronxLayer,
//     "Queens": queensLayer,
//     "Staten Island": statenIslandLayer,
//     "Manhattan": manhattanLayer,
//     "Brooklyn": brooklynLayer
// }

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 17,
//         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     }).addTo(map)

// const baseLayers = {
//         "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
//     };

// L.control.layers(baseLayers, overlays).addTo(map);