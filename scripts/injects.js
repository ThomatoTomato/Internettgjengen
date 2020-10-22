if (window.sessionStorage.getItem("activeUser") == null) 
{ 
    if ( document.title == "Profil" || document.title == "Love @ NTNU" )
    {
        window.location.href = "forside.html";
    }
    displayRegister(); 
}
else { displayHeartProfile(); }

function displayHeartProfile() 
{ 
    // injecter hjertet
    console.log("Logga inn")
    var hjerte = document.createElement("a");
    hjerte.setAttribute("href", "hovedside.html");
    var hjerte_img = document.createElement("img");
    hjerte_img.setAttribute("class", "iconoclast");
    hjerte_img.setAttribute("id", "hjerte");
    hjerte_img.setAttribute("src", "img/elementer/pixelhjerte.png");
    hjerte_img.setAttribute("alt", "Pixelhjerte");
    hjerte.appendChild(hjerte_img);
    
    document.body.insertBefore(hjerte, document.body.firstChild);

    // injecter profilikonet
    var profil = document.createElement("a");
    profil.setAttribute("href", "profil.html");
    var profil_img = document.createElement("img");
    profil_img.setAttribute("class", "iconoclast");
    profil_img.setAttribute("id", "profil");
    profil_img.setAttribute("src", "img/elementer/profil.png");
    profil_img.setAttribute("alt", "Profil");
    profil.appendChild(profil_img);
    
    document.body.insertBefore(profil, document.body.firstChild);
}

function displayRegister() 
{ 
    console.log("Ikke logga inn");

    // injecter register-button
    var register = document.createElement("BUTTON");
    var text = document.createTextNode("Register");
    register.appendChild(text);
    register.setAttribute("id", "registerButton");
    register.setAttribute("class", "iconoclast");
    register.setAttribute("onclick", "redirect()");

    document.body.insertBefore(register, document.body.firstChild);
}

// denne er teit men den er her fordi det ikke funka med lambda når jeg skulle sette attribute..
function redirect() { window.location.href = 'registrering.html'; }

// injecter footer
function navigation() 
{
    
}