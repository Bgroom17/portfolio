//set up the request for the data

//async function showRides(url = 'https://touringplans.com/magic-kingdom/attractions.json'){
//    const result = await getRides(url);
//
//api list of rides comes from https://touringplans.com/api#

fetch('/rides.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });