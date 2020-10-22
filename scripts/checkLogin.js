if (window.sessionStorage.getItem("activeUser") == null) { displayRegister(); }
else { displayHeartProfile(); }

function displayHeartProfile() 
{ 
    console.log("HeartProfile")
}

function displayRegister() 
{ 
    console.log("Register"); 
}