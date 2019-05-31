//questions:
//total button
//reset
//github



/*eslint-env browser*/
//This is the Model, code that deals with the data

var groceryList = [];

function getGroceryList() {
    const getList = JSON.parse(window.localStorage.getItem('GroceryList'))
    if (getList != null) {

        groceryList = getList;
        console.log(groceryList)
        var length = groceryList.length;
        for (var i = 0; i < length; i++) {
            createStoredList(groceryList[i]);
            
        }
        
        totalPrice();
    };
    
    

}


//this is for the control
window.addEventListener('load', getGroceryList)


function totalPrice() {
    const length = groceryList.length;
    let total = 0;
    for (var i = 0; i < length; i++) {
        total += parseFloat(groceryList[i].price);
        var storedPrice = "<li>" + total + "</li>";
        document.getElementById('totalListPrice').innerHTML = total;
    }
}


//this is where I will build information for building my view


//adding item


function createStoredList(groceryItem) {

    var storedDescription = "<li>" + groceryItem.description + "</li>";
    document.getElementById('itemDescriptionList').innerHTML += storedDescription;

    var storedQuantity = "<li>" + groceryItem.quantity + "</li>";
    document.getElementById('itemQuantityList').innerHTML += storedQuantity;

    var storedPrice = "<li>" + groceryItem.price + "</li>";
    document.getElementById('itemPriceList').innerHTML += storedPrice;

}

function createList() {

    console.log()
    
    var itemDes = document.getElementById('itemD');
    var itemQ = document.getElementById('quantity');
    var itemP = document.getElementById('price');
    
    if(itemDes.value != ''){//all three var
       
       

    //add item
    
    var desLi = "<li>" + itemDes.value + "</li>";
    document.getElementById('itemDescriptionList').innerHTML += desLi;

    //add quantity
    
    var quantityLi = "<li>" + itemQ.value + "</li>";
    document.getElementById('itemQuantityList').innerHTML += quantityLi;

    //add price
    
    var priceLi = "<li>" + itemP.value + "</li>";
    document.getElementById('itemPriceList').innerHTML += priceLi;




    //adding an item to the array
    let newItem = {
        description: itemDes,
        quantity: itemQ,
        price: itemP
    }
    
     console.log(newItem);

    groceryList.push(newItem);
    
    
    

    //adding the array to local storage
    window.localStorage.setItem('GroceryList', JSON.stringify(groceryList));
    
    
  itemDes.value = '';

    
}

else{
    //tell themthat its not working - error messageanddo nothing
}
   
}

document.getElementById('addNew').addEventListener('touchend', function () {
    createList();
    totalPrice();
})






