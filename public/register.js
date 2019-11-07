var users=getUsers();

function getUsers()
{
  if(!localStorage.users)
  {
    localStorage.users=JSON.stringify([]);
  }
    return JSON.parse(localStorage.users);
}

function storeUsers(users)
{
  localStorage.users=JSON.stringify(users);
}

function checkpassword()
{
  var password=document.getElementById("inputPassword").value;
  var repassword=document.getElementById("inputRePassword").value;
  if(password!=repassword)
  {
    document.getElementById("btnregister").disabled = true;
    document.getElementById("mismatcherror").innerHTML="Passwords do not match!";
  }
  else
  {
    document.getElementById("btnregister").disabled = false;
    document.getElementById("mismatcherror").innerHTML="";
  }
}

function register()
{
var name=document.getElementById("inputName").value;
var username=document.getElementById("inputUsername").value;
var password=document.getElementById("inputPassword").value;
var repassword=document.getElementById("inputRePassword").value;
if(username=="" || password=="" || name=="")
{
}
else
{
  if(checkUsername(username))
  {
  createObject(username,password,name);
  }
}
}

function createObject(u,p,n)
{
  var objUser=new Object();
  objUser.Name=n;
  objUser.Username=u;
  objUser.Password=p;
  users.push(objUser);
  storeUsers(users);
}

function checkUsername(u)
{
  if(users==[])
  return true;
  else
  for(var i=0;i<users.length;i++)
  {
    if(users[i].Username==u)
    {
      alert("This username already exists!");
      return false;
    }
  }
  return true;
}
var alogin=document.createElement("a");
alogin.innerHTML="Login now";
alogin.setAttribute("href","login.html");
alogin.setAttribute("style","margin-left: 60px; text-decoration: none; border-bottom: 1px solid black;color: black; transition: border-bottom 0.1s;");
var formregister=document.getElementById("formregister");
formregister.appendChild(alogin);
