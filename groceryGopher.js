/*eslint-env browser*/
//This is the Model, code that deals with the data

var groceryList = [];







//this is for the control









//this is where I will build information for building my view


//adding item
{
    document.getElementById('addNew').ontouchend = function () {
        
        //add item
        var itemDes = document.getElementById('itemD').value;
        var desLi = "<li>" + itemDes + "</li>";
      document.getElementById('itemDescriptionList').innerHTML += desLi;


        //add quantity
        var itemQ = document.getElementById('quantity').value;
        var quantityLi = "<li>" + itemQ + "</li>";
        document.getElementById('itemQuantityList').innerHTML += quantityLi;

        //add price
        var itemP = document.getElementById('price').value;
        var priceLi = "<li>" + itemP + "</li>";
        document.getElementById('itemPriceList').innerHTML += priceLi;
        
        let newItem = {description: itemDes, quantity: itemQ, price: itemP}
        groceryList.push(newItem);
        console.log(newItem);
    }
}