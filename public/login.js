var users=getUsers();
var activeuser=getActiveUser();
function storeActiveUser(activeuser)
{
  localStorage.activeuser=JSON.stringify(activeuser);
}
function getActiveUser()
{
  if(!localStorage.activeuser)
  {
    localStorage.activeuser=JSON.stringify("");
  }
    return JSON.parse(localStorage.activeuser);
}

function getUsers()
{
  if(!localStorage.users)
  {
    localStorage.users=JSON.stringify([]);
  }
    return JSON.parse(localStorage.users);
}

function validate()
{
  divgotoregister.innerHTML="";
  errormessage.innerHTML="";
var username=document.getElementById("inputUsername").value;
var password=document.getElementById("inputPassword").value;
checkpassword(username,password);
//window.history.back();

}
function checkpassword(username,password)
{
  var actualpass="";
  for(var i=0;i<users.length;i++)
  {
    if(username==users[i].Username)
    actualpass=users[i].Password;
  }
  if(actualpass=="")
  {
    gotoregister();
  }
  else
  {
    if(actualpass==password)
    {
      activeuser=username;
      storeActiveUser(activeuser);
      document.getElementById("errormessage").innerHTML="You are login!";
      window.location='home.html';
    }
    else {/*
      var passwordIncorrect=document.createElement("h1");
      passwordIncorrect.innerHTML="ghgfdfdghjkljhdfsfhj";
      passwordIncorrect.setAttribute("style","left-margin= 40%, top-margin= 10%");
      document.getElementById("formlogin").appendChild(passwordIncorrect);
      */
     document.getElementById("errormessage").innerHTML="Password is Incorrect!";

      
    }
  }
}

function gotoregister()
{
  var txtregister=document.createElement("p");
 
  txtregister.innerHTML="Looks like you are a new user!";
  txtregister.setAttribute("style","margin-left: 40px; ");
  var aregister=document.createElement("a");
  aregister.setAttribute("style","margin-left: 60px; text-decoration: none; border-bottom: 1px solid black;color: black; transition: border-bottom 0.1s;");
  aregister.setAttribute("href","register.html");
  aregister.innerHTML="Register First";

  divgotoregister.appendChild(txtregister);
  divgotoregister.appendChild(aregister);
}
