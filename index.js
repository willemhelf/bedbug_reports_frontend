let destring



$.ajax({
  url: "https://data.cityofnewyork.us/api/v3/views/wz6d-d3jb/query.json",
  type: "POST",
  dataType: "text",
  headers: {
    "Content-Type": "application/json",
    'X-App-Token': "imTiX8jDpkId1dWdHQKnluIee"
  },
  data: JSON.stringify({
    query: "SELECT *",
    page: {
      pageNumber: 1,
      pageSize: 5000,
    },
    includeSynthetic: false,
  }),
}).done(function (data) {
    destring = JSON.parse(data)
    //const bronx = destring[0]['borough']
    console.log()
  //alert("Retrieved " + data.length + " records from the dataset!");
  //console.log(data);
});


// console.log(bronx)