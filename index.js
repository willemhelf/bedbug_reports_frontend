import { API_TOKEN } from './config.js'

function mapPoints(data) {
  let coordArray = []
  for (let i = 101; i <= 4500; i++) {
    let arr = []
    arr.push(data[i]["borough"], parseFloat(data[i]["latitude"]), parseFloat(data[i]["longitude"]))
    coordArray.push(arr)
  }
  return coordArray
}

let jsonOutput = $.ajax({
    url: "https://data.cityofnewyork.us/api/v3/views/wz6d-d3jb/query.json",
      type: "POST",
      dataType: "text",
      async: false,
      headers: {
        "Content-Type": "application/json",
        'X-App-Token': `${API_TOKEN}`
      },
      data: JSON.stringify({
        query: "SELECT *", 
        page: {
          pageNumber: 1,
          pageSize: 5000, // can make this any size but affects load time majorly
        },
        includeSynthetic: false,
      }),
    }).done(function(data) {
        //JSON.parse(data)
  }).responseText

let jsonParsed = JSON.parse(jsonOutput)

export let coordinates = mapPoints(jsonParsed)
export let bronx = coordinates.filter(inner => inner[0] == "BRONX")
export let queens = coordinates.filter(inner => inner[0] == "QUEENS")
export let statenIsland = coordinates.filter(inner => inner[0] == "STATEN ISLAND")
export let manhattan = coordinates.filter(inner => inner[0] == "MANHATTAN")
export let brooklyn = coordinates.filter(inner => inner[0] == "BROOKLYN")

//console.log(brooklyn)
//console.log(bronx2(coordinates))