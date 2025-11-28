import { jsonParsed } from "./index.js";

let geoJsonOutput = {
    "type": "FeatureCollection",
    "features": jsonParsed.map(d => ({
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [d["latitude"], d["longitude"]]
        },
        "properties": {...d}
    }))
}

console.log(geoJsonOutput)