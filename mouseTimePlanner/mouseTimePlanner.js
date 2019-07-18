//api list of rides comes from https://touringplans.com/api#

fetch('/rides.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    });

//function renderRideList() {
//
//}

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



function showList(rides) {
    const rideList = document.getElementById('rideName')
    rides.forEach(function (name) {
        rideList.innerHTML += '<li><a>' + name.name + '</a></li>';
        console.log('adding ride to list');
    })

    rideList.addEventListener('touchend', function (event) {
        event.preventDefault()
        addToPlans(event.target)
        console.log(event);
    })
    //way of knowing what was clicked and add event listener, check the console for target.innerText to know what they clicked on to add it to their personal list event.prevent default. For the different views, keep it dingle pages but use a finction, if this is selected, load this html. also add prevent default to nav links


}

//buildList();



//select an item from the list and add it to their personal plans

function addToPlans(ride) {
    //call this function in showList
    ride.classList.add('chosenRide') //add a class to change visual, array.length to change how many rides they have chosen

    myRides.push(event.target.innerHTML);
    console.log(myRides)
    
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


function searchEngine() {
    var input = document.getElementById('myInput');
    let filter = input.value.toUpperCase();
    var ul = document.getElementById('rideName');
    let li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        let txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}


function displayList() {
    var length = myRides.length;
    const parent = document.getElementById('myPlans');
    parent.innerHTML = '';
    for (var i = 0; i < length; i++) {
        var chosenRideLi = '<li>' + myRides[i] + '</li>';
        parent.innerHTML += chosenRideLi;
        myRides.sort();
        console.log(myRides[i])
        
    }
}

//function count(){
//    for (i = 0; i <  myRides.length; i++){
//        displayedHTML.innerHTML = `<p>` + myRides.length  + ` Rides Selected</p>`;
//    }
//}


//view

const ridesLink = document.getElementById('ridesLink');
const plansLink = document.getElementById('plansLink');
const displayedHTML = document.getElementById('displayedHTML');

function buildRidesPage() {
    displayedHTML.innerHTML = `
<input type="text" id="myInput" onkeyup="searchEngine()" placeholder="Search for rides..">   
<div>
    <p id= 'runningCount'>` + myRides.length  + ` Rides Selected</p>
    <ul id = rideName>
    </ul>
</div>`
    
    buildList();
}
ridesLink.addEventListener('touchend', buildRidesPage)


function buildMyPlansPage() {
    
    if (myRides.length == 0){
            displayedHTML.innerHTML = `<p>No rides selected</p>`
        }
    
    else{
    displayedHTML.innerHTML = `
<h1>My Plans (`+ myRides.length  +`)</h1>
   <ul id=myPlans>
  </ul>`
    
    
    displayList();
    }
//    addToPlans(rides);
    
}

plansLink.addEventListener('touchend', buildMyPlansPage)


