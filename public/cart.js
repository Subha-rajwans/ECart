var cart=getCart();
var activeuser=getActiveUser();

function getActiveUser()
{
  if(!localStorage.activeuser)
  {
    localStorage.activeuser=JSON.stringify("");
  }
    return JSON.parse(localStorage.activeuser);
}

function storeActiveUser(activeuser)
{
  localStorage.activeuser=JSON.stringify(activeuser);
}

function storeCart(cart){
  localStorage.cart=JSON.stringify(cart);
}

function getCart()
{
  if(!localStorage.cart)
  {
    localStorage.cart=JSON.stringify([]);
  }
  return JSON.parse(localStorage.cart);
}

var divProductsInCart=document.getElementById("divProductsInCart");
for(var i=0;i<cart.length;i++)
{
  if(cart[i].User==activeuser)
  addToDOM(cart[i]);

}

function addToDOM(objectProduct){
  var divProductAdded=document.createElement("div");
  divProductAdded.setAttribute("id","divProductAdded");
//  divProductAdded.setAttribute("style","background-color:#ffe6e6;padding:20px;width:200px");

  var txtProductName=document.createElement("p");
  txtProductName.innerHTML="Name : "+objectProduct.Name;

  var textQuantity=document.createElement("p");
  textQuantity.innerHTML="Quantity : "+objectProduct.Quantity;

  var txtProductPrice=document.createElement("p");
  txtProductPrice.innerHTML="Price : "+objectProduct.Price;

/*
  var textQuantity=document.createElement("input");
  textQuantity.setAttribute("id",objectProduct.Id);
  textQuantity.setAttribute("type","text");
  textQuantity.setAttribute("placeholder","Enter quantity");
  textQuantity.setAttribute("style","width:150px;height:25px");

  var btnAddToCart=document.createElement("button");
  btnAddToCart.setAttribute("id","btnAddToCart");
  btnAddToCart.innerHTML="Add to Cart";
  btnAddToCart.setAttribute("style","width:150px;height:25px");
*/
  divProductAdded.appendChild(txtProductName);
  //divProductAdded.appendChild(txtProductDesc);
  divProductAdded.appendChild(txtProductPrice);
  divProductAdded.appendChild(textQuantity);
  //divProductAdded.appendChild(btnAddToCart);
  divProductsInCart.appendChild(divProductAdded);

 /* btnAddToCart.addEventListener("click",function(event)
{
var indexNo=textQuantity.id;
var index=getIndex(indexNo);
var x=document.getElementById(objectProduct.Id).value;
console.log(x);
//var quan=document.getElementById(objectProduct.Id).value;
addToCartArray(products[index],indexNo,x);
}
*/
//);
}

