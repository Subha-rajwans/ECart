var productNumber=getproductNumber();
var products=getStoredProducts();
var cart=getCart();
var activeuser=getActiveUser();
var users=getUsers();

function getUsers()
{
  if(!localStorage.users)
  {
    localStorage.users=JSON.stringify([]);
  }
    return JSON.parse(localStorage.users);
}

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

function getproductNumber()
{
  if(!localStorage.productNumber)
  {
    localStorage.productNumber=JSON.stringify(1);
  }
    return JSON.parse(localStorage.productNumber);
}

function getCart()
{
  if(!localStorage.cart)
  {
    localStorage.cart=JSON.stringify([]);
  }
  return JSON.parse(localStorage.cart);
}

function getStoredProducts()
{
  if(!localStorage.products)
  {
    localStorage.products=JSON.stringify([]);
  }
  return JSON.parse(localStorage.products);
}


function storeproductNumber(){
  localStorage.productNumber=JSON.stringify(productNumber);
}

function storeProducts(products){
  localStorage.products=JSON.stringify(products);
}

function storeCart(cart){
  localStorage.cart=JSON.stringify(cart);
}

for(var i=0;i<products.length;i++)
{
  addToDOM(products[i]);
}

function addToDOM(objectProduct){
  var divProductAdded=document.createElement("div");
  divProductAdded.setAttribute("id","divProductAdded");
//  divProductAdded.setAttribute("style","background-color:#ffe6e6;padding:20px;width:200px");

  var txtProductName=document.createElement("p");
  txtProductName.innerHTML="Name : "+objectProduct.Name;

  var txtProductDesc=document.createElement("p");
  txtProductDesc.innerHTML="Description : "+objectProduct.Descp;

  var txtProductPrice=document.createElement("p");
  txtProductPrice.innerHTML="Price : "+objectProduct.Price;


  var textQuantity=document.createElement("input");
  textQuantity.setAttribute("id",objectProduct.Id);
  textQuantity.setAttribute("type","text");
  textQuantity.setAttribute("placeholder","Enter quantity");
  textQuantity.setAttribute("style","width:150px;height:25px");

  var btnAddToCart=document.createElement("button");
  btnAddToCart.setAttribute("id","btnAddToCart");
  btnAddToCart.innerHTML="Add to Cart";
  btnAddToCart.setAttribute("style","width:150px;height:25px");

  divProductAdded.appendChild(txtProductName);
  divProductAdded.appendChild(txtProductDesc);
  divProductAdded.appendChild(txtProductPrice);
  divProductAdded.appendChild(textQuantity);
  divProductAdded.appendChild(btnAddToCart);
  divListProducts.appendChild(divProductAdded);

  btnAddToCart.addEventListener("click",function(event)
{
var indexNo=textQuantity.id;
var index=getIndex(indexNo);
var x=document.getElementById(objectProduct.Id).value;
console.log(x);
//var quan=document.getElementById(objectProduct.Id).value;
addToCartArray(products[index],indexNo,x,objectProduct.Name,textQuantity.value);
});
}

function getIndex(id){
  for(var i=0;i<products.length;i++)
  {
    if(products[i].Id==id)
    return i;
  }
}

function addToCartArray(obj,indexNo,x,name,quan)
{
  var cartObject=new Object();
  cartObject.User=activeuser;
  cartObject.Name=name;
  cartObject.Id=indexNo;
  cartObject.Quantity=quan;
  cartObject.Price=obj.Price;
  cart.push(cartObject);
  console.log(cart);
  storeCart(cart);
}

var userName="";
for(var i=0;i<users.length;i++)
{
  if(activeuser==users[i].Username)
  userName=users[i].Name;
}
var user=document.getElementById("puser");
if(userName=="")
{
  userName="Guest";
  user.innerHTML="Welcome, "+userName+"!<br>";
  var alogout=document.createElement("a");
  alogout.innerHTML="Login";
  alogout.setAttribute("href","login.html");
  alogout.setAttribute("style","float:right; text-decoration: none; border-bottom: 1px solid black;color: black; transition: border-bottom 0.1s;");
  puser.appendChild(alogout);
}
else
{
user.innerHTML="Welcome, "+userName+"!<br>";
var alogout=document.createElement("a");
alogout.innerHTML="Logout";
alogout.setAttribute("href","home.html");
alogout.setAttribute("onclick","userLogout()");
alogout.setAttribute("style","float:right; text-decoration: none; border-bottom: 1px solid black;color: black; transition: border-bottom 0.1s;");
puser.appendChild(alogout);
}

function userLogout()
{
  activeuser="";
  storeActiveUser(activeuser);
}
