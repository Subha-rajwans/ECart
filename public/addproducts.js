var aAddProduct=document.getElementById("aAddProduct");
var divAddProduct=document.getElementById("divAddProduct");
var divListProducts=document.getElementById("divListProducts");
var productNumber=getproductNumber();
var products=getStoredProducts();

function getproductNumber()
{
  if(!localStorage.productNumber)
  {
    localStorage.productNumber=JSON.stringify(1);
  }
    return JSON.parse(localStorage.productNumber);
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

aAddProduct.addEventListener("click",function(event)
{
  //unhideAddNewProductLink(divAddProduct);
  addNewProduct();
});
function hideAddNewProductLink(target)
{
  target.setAttribute("style","visibility:hidden");
}
function unhideAddNewProductLink(target)
{
  target.setAttribute("style","visibility:visible");
}
function addSpace(target,number){
  for(var i=0;i<number;i++)
  {
    var blankLine=document.createElement("br");
    target.appendChild(blankLine);
  }
}

for(var i=0;i<products.length;i++)
{
  addToDOM(products[i]);
}
function addNewProduct(){

  hideAddNewProductLink(aAddProduct);

  var labelAddProduct=document.createElement("label");
  labelAddProduct.innerHTML="Enter element details";
  divAddProduct.appendChild(labelAddProduct);

  addSpace(divAddProduct,2);

  var inputProductName=document.createElement("input");
  inputProductName.setAttribute("id","inputProductName");
  inputProductName.setAttribute("type","text");
  inputProductName.setAttribute("placeholder","Enter product name");
  inputProductName.setAttribute("style","width:40%");
  divAddProduct.appendChild(inputProductName);

  addSpace(divAddProduct,2);

  var labelProductDescp=document.createElement("label");
  labelProductDescp.innerHTML="Product Description";
  divAddProduct.appendChild(labelProductDescp);

  addSpace(divAddProduct,2);

  var inputProductDescp=document.createElement("textarea");
  inputProductDescp.setAttribute("id","inputProductDescp");
  inputProductDescp.setAttribute("type","text");
  inputProductDescp.setAttribute("placeholder","Enter product description");
  inputProductDescp.setAttribute("style","width:40%");
  divAddProduct.appendChild(inputProductDescp);

  addSpace(divAddProduct,2);

  var labelProductPrice=document.createElement("label");
  labelProductPrice.innerHTML="Product price";
  divAddProduct.appendChild(labelProductPrice);

  addSpace(divAddProduct,2);

  var inputProductPrice=document.createElement("input");
  inputProductPrice.setAttribute("id","inputProductPrice");
  inputProductPrice.setAttribute("type","text");
  inputProductPrice.setAttribute("placeholder","Enter product price");
  inputProductPrice.setAttribute("style","width:40%");
  divAddProduct.appendChild(inputProductPrice);

  addSpace(divAddProduct,2);

  var labelProductQuantity=document.createElement("label");
  labelProductQuantity.innerHTML="Enter quantity";
  divAddProduct.appendChild(labelProductQuantity);

  addSpace(divAddProduct,2);

  var inputProductQuantity=document.createElement("input");
  inputProductQuantity.setAttribute("id","inputProductQuantity");
  inputProductQuantity.setAttribute("type","text");
  inputProductQuantity.setAttribute("style","width:40%");
  inputProductQuantity.setAttribute("placeholder","Enter product Quantity");
  divAddProduct.appendChild(inputProductQuantity);

  addSpace(divAddProduct,2);

  var btnSubmit=document.createElement("button");
  btnSubmit.setAttribute("id","btnSubmit");
  btnSubmit.setAttribute("style","width:20%;height:25px");
  btnSubmit.innerHTML="Submit";
  divAddProduct.appendChild(btnSubmit);

//  addSpace(divAddProduct,2);

  var btnCancel=document.createElement("button");
  btnCancel.setAttribute("id","btnCancel");
  btnCancel.setAttribute("style","width:20%;height:25px");
  btnCancel.innerHTML="Cancel";
  divAddProduct.appendChild(btnCancel);

  btnSubmit.addEventListener("click",function(event)
{
  //addToList();
  addToObject();

});
btnCancel.addEventListener("click",function(event)
{
  deleteProductForm();
  unhideAddNewProductLink(aAddProduct);
});
}
function addToObject(){
  var objectProduct= new Object();
  objectProduct.Id=productNumber;
  objectProduct.Name=document.getElementById("inputProductName").value;
  objectProduct.Descp=document.getElementById("inputProductDescp").value;
  objectProduct.Price=document.getElementById("inputProductPrice").value;
  objectProduct.Quantity=document.getElementById("inputProductQuantity").value;

  products.push(objectProduct);
  storeProducts(products);
  storeproductNumber();
  addToDOM(objectProduct);
addSpace(2);
}
function addToDOM(objectProduct){
  var divProductAdded=document.createElement("div");
  divProductAdded.setAttribute("id",productNumber);
//  divProductAdded.setAttribute("style","background-color:#ffe6e6;padding:20px;width:200px");

  var txtProductName=document.createElement("p");
  txtProductName.innerHTML=objectProduct.Name;

  var txtProductDesc=document.createElement("p");
  txtProductDesc.innerHTML=objectProduct.Descp;

  var txtProductPrice=document.createElement("p");
  txtProductPrice.innerHTML=objectProduct.Price;

  var txtProductQuantity=document.createElement("p");
  txtProductQuantity.innerHTML=objectProduct.Quantity;

  var btnEdit=document.createElement("button");
  btnEdit.setAttribute("id",productNumber);
  btnEdit.innerHTML="Edit";
  btnEdit.setAttribute("style","width:70px;height:25px");

  var btnDelete=document.createElement("button");
  btnDelete.setAttribute("id","btnDelete");
  btnDelete.innerHTML="Delete";
  btnDelete.setAttribute("style","width:70px;height:25px");

  divProductAdded.appendChild(txtProductName);
  divProductAdded.appendChild(txtProductDesc);
  divProductAdded.appendChild(txtProductPrice);
  divProductAdded.appendChild(txtProductQuantity);
  divProductAdded.appendChild(btnEdit);
  divProductAdded.appendChild(btnDelete);
  divListProducts.appendChild(divProductAdded);
productNumber++;

btnEdit.addEventListener("click",function(event)
{
  var productIndex=getIndex(divProductAdded.id);
  editProduct(productIndex);
});
btnDelete.addEventListener("click",function(event)
{
  deleteProduct(divProductAdded);
  storeProducts(products);
  storeproductNumber();
});
unhideAddNewProductLink(aAddProduct);
deleteProductForm();

}
function editProduct(id){

    var labelAddProduct=document.createElement("label");
    labelAddProduct.innerHTML="Edit Product";
    divAddProduct.appendChild(labelAddProduct);

    addSpace(divAddProduct,2);

    var inputProductName=document.createElement("input");
    inputProductName.setAttribute("id","inputProductName");
    inputProductName.setAttribute("type","text");
    inputProductName.setAttribute("placeholder","Enter product name");
    inputProductName.setAttribute("style","width:40%");
    inputProductName.setAttribute("value",products[id].Name);
    divAddProduct.appendChild(inputProductName);
    addSpace(divAddProduct,2);

    var labelProductDescp=document.createElement("label");
    labelProductDescp.innerHTML="Product Description";
    divAddProduct.appendChild(labelProductDescp);

    addSpace(divAddProduct,2);

    var inputProductDescp=document.createElement("input");
    inputProductDescp.setAttribute("id","inputProductDescp");
    inputProductDescp.setAttribute("type","textarea");
    inputProductDescp.setAttribute("placeholder","Enter product description");
    inputProductDescp.setAttribute("style","width:40%");
    inputProductDescp.setAttribute("value",products[id].Descp);
    divAddProduct.appendChild(inputProductDescp);

    addSpace(divAddProduct,2);

    var labelProductPrice=document.createElement("label");
    labelProductPrice.innerHTML="Product price";
    divAddProduct.appendChild(labelProductPrice);

    addSpace(divAddProduct,2);

    var inputProductPrice=document.createElement("input");
    inputProductPrice.setAttribute("id","inputProductPrice");
    inputProductPrice.setAttribute("type","text");
    inputProductPrice.setAttribute("placeholder","Enter product price");
    inputProductPrice.setAttribute("style","width:40%");
    inputProductPrice.setAttribute("value",products[id].Price);
    divAddProduct.appendChild(inputProductPrice);

    addSpace(divAddProduct,2);

    var labelProductQuantity=document.createElement("label");
    labelProductQuantity.innerHTML="Enter quantity";
    divAddProduct.appendChild(labelProductQuantity);

    addSpace(divAddProduct,2);

    var inputProductQuantity=document.createElement("input");
    inputProductQuantity.setAttribute("id","inputProductQuantity");
    inputProductQuantity.setAttribute("type","text");
    inputProductQuantity.setAttribute("style","width:40%");
    inputProductQuantity.setAttribute("placeholder","Enter product Quantity");
    inputProductQuantity.setAttribute("value",products[id].Quantity);
    divAddProduct.appendChild(inputProductQuantity);

    addSpace(divAddProduct,2);


    var btnSubmit=document.createElement("button");
    btnSubmit.setAttribute("id","btnSubmit");
    btnSubmit.setAttribute("style","width:20%;height:25px");
    btnSubmit.innerHTML="Submit";
    divAddProduct.appendChild(btnSubmit);

    btnSubmit.addEventListener("click",function(event)
  {
editInArray(id);
editInDom(id);
deleteProductForm();
  });
}
function editInArray(id)
{
  products[id].Name=document.getElementById("inputProductName").value;
  products[id].Descp=document.getElementById("inputProductDescp").value;
  products[id].Price=document.getElementById("inputProductPrice").value;
  products[id].Quantity=document.getElementById("inputProductQuantity").value;
  console.log(products);
  storeProducts(products);
}
function editInDom(id)
{
  var allkids=divListProducts.children;
  var divid=allkids[id].id;
  console.log(allkids);
  console.log(divid);
  var divkids=allkids[divid-1].children;
  console.log(divkids);
  divkids[0].innerHTML=document.getElementById("inputProductName").value;
  divkids[1].innerHTML=document.getElementById("inputProductDescp").value;
  divkids[2].innerHTML=document.getElementById("inputProductPrice").value;
  divkids[3].innerHTML=document.getElementById("inputProductQuantity").value;
}
function deleteProductForm(){
  var childNodes = divAddProduct.childNodes;
  for (var i = 0; childNodes.length > 0;)
  {
    divAddProduct.removeChild(childNodes[i]);
  }
}

function deleteProduct(divProductAdded){
  var productIndex=getIndex(divProductAdded.id);
  products.splice(productIndex,1);
  divProductAdded.parentNode.removeChild(divProductAdded);
}
function getIndex(id){
  for(var i=0;i<products.length;i++)
  {
    if(products[i].Id==id)
    return i;
  }
}
function deleteFromArray(selectedProductIndex)
{
  products.splice(selectedProductIndex,1);
  console.log(products);
}
