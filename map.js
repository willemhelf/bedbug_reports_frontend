//import { coordinates, bronx, queens, statenIsland, manhattan, brooklyn } from './index.js'

 


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