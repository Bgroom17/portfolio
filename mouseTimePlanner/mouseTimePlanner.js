
//api list of rides comes from https://touringplans.com/api#

fetch('/rides.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

function renderRideList(){
    
}

var myRides = [];


var data = [];

const ridesURL = '/rides.json';
//function that brings in the url and calls it each time we need data 'https://swapi.co/api/people/'

function getJson(url) {
    return fetch(url)
        .then(function (request) {
            return request.json();

        })

}

async function buildList() {
    const rides = await getJson(ridesURL);
    console.log(rides);
    showList(rides);

}


function showList(rides){
    const rideList = document.getElementById('rideName') 
    rides.forEach(function(name) {
        rideList.innerHTML += '<li><a>' + name.name + '</a></li>';
        console.log('adding ride to list');
        })
    
    rideList.addEventListener('touchend', function(event){
        event.preventDefault()
        addToPlans(event.target)
        console.log(event);    
    })
//way of knowing what was clicked and add event listener, check the console for target.innerText to know what they clicked on to add it to their personal list event.prevent default. For the different views, keep it dingle pages but use a finction, if this is selected, load this html. also add prevent default to nav links
    
    
}

buildList();



//select an item from the list and add it to their personal plans

function addToPlans(ride){
    //call this function in showList
    ride.classList.add('chosenRide')//add a class to change visual, array.length to change how many rides they have chosen
    
       myRides.push(event.target.innerHTML);  
        console.log(myRides)
    displayList();
    
}
//
// window.localStorage.setItem('myRides', JSON.stringify(myRides));
//
//function getMyRides() {
//    const rideListLS = JSON.parse(window.localStorage.rideListLS('myRides'))
//    if (rideListLS != null) {
//
//        myRides = rideListLS;
//        console.log('ls test')
//        var length = selectedList.length;
//        for (var i = 0; i < length; i++) {
//            createStoredList(selectedList[i]);
//
//        }
//
//}
//

function displayList(){


    var length = myRides.length;
for (var i = 0; i < length; i++){
    var chosenRideLi = '<li>' + myRides[i] + '</li>';
    document.getElementById('myPlans').innerHTML += chosenRideLi;
    console.log(myRides[i])
}


}