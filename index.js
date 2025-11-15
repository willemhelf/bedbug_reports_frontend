import { API_TOKEN } from './config.js'

function mapPoints(data) {
  let coordArray = []
  for (let i = 101; i <= 200; i++) {
    let arr = []
    arr.push(parseFloat(data[i]["latitude"]), parseFloat(data[i]["longitude"]))
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
          pageSize: 5000,
        },
        includeSynthetic: false,
      }),
    }).done(function(data) {
        //JSON.parse(data)
  }).responseText

let jsonParsed = JSON.parse(jsonOutput)

export let coordinates = mapPoints(jsonParsed)
console.log(coordinates)