if (window.sessionStorage.getItem("activeUser") == null) 
{ 
    if ( document.head.id == "Forside" ) {}
    else if ( document.title == "Profil" || document.title == "Love @ NTNU" )
    {
        window.location.href = "forside.html";
        displayRegister(); 
    }
    else 
    {
        displayRegister();
    }
}
else if (document.head.id == "Forside") {window.location.href = "hovedside.html"}
else if (document.title == "Profil") {
    displayHeart()
    displayLogout()

}
else { 
    displayHeart();
    displayProfil();
}

navigation();

function displayHeart() 
{ 
    // injecter hjertet
    console.log("Logga inn")
    let hjerte = document.createElement("a");
    hjerte.setAttribute("href", "hovedside.html");
    let hjerte_img = document.createElement("img");
    hjerte_img.setAttribute("class", "iconoclast");
    hjerte_img.setAttribute("id", "hjerte");
    hjerte_img.setAttribute("src", "img/elementer/pixelhjerte.png");
    hjerte_img.setAttribute("alt", "Pixelhjerte");
    hjerte.appendChild(hjerte_img);
    
    document.body.insertBefore(hjerte, document.body.firstChild);
}

function displayProfil()
{

    // injecter profilikonet
    let profil = document.createElement("a");
    profil.setAttribute("href", "profil.html");
    let profil_img = document.createElement("img");
    profil_img.setAttribute("class", "iconoclast");
    profil_img.setAttribute("id", "profil");
    profil_img.setAttribute("src", "img/elementer/profil.png");
    profil_img.setAttribute("alt", "Profil");
    profil.appendChild(profil_img);
    
    document.body.insertBefore(profil, document.body.firstChild);
}

function displayLogout() {
    // injiserer logg ut knapp
    let register = document.createElement("BUTTON");
    let text = document.createTextNode("Logg ut");
    register.appendChild(text);
    register.setAttribute("id", "registerButton");
    register.setAttribute("class", "iconoclast");
    register.setAttribute("onclick", "logout()");

    document.body.insertBefore(register, document.body.firstChild);
}

function displayRegister() 
{ /* 
    console.log("Ikke logga inn"); */

    // injecter register-button
    let register = document.createElement("BUTTON");
    let text = document.createTextNode("Register");
    register.appendChild(text);
    register.setAttribute("id", "registerButton");
    register.setAttribute("class", "iconoclast");
    register.setAttribute("onclick", "redirect()");

    document.body.insertBefore(register, document.body.firstChild);
}

// denne er teit men den er her fordi det ikke funka med lambda når jeg skulle sette attribute..
function redirect() { window.location.href = 'registrering.html'; }

function logout() {
    if (window.confirm("Er du sikker på at du vil logge ut?")) {
        sessionStorage.clear()
        window.location.href = "forside.html"
    }
}

// injecter footer
function navigation() 
{
    let footer = document.getElementsByTagName("footer")[0];

    /* dette er jo finere da
    footer.innerHTML = "<p><a href='tidligerevinnere.html'>Tidligere vinnere</a> | <a href='omoss.html'>Om oss</a> | <a href='vårmetode.html'>Vår metode</a> | <a href='howtoplay.html'>How To Play</a></p>"; 
    */

    let p_tag = document.createElement("p");

    let link1 = document.createElement("a");
    link1.setAttribute("href", "tidligereVinnere.html");
    link1.innerText = "Tidligere Vinnere | ";
    let link2 = document.createElement("a");
    link2.setAttribute("href", "omOss.html");
    link2.innerText = "Om Oss | ";
    let link3 = document.createElement("a");
    link3.setAttribute("href", "vårMetode.html");
    link3.innerText = "Vår Metode | ";
    let link4 = document.createElement("a");
    link4.setAttribute("href", "howToPlay.html");
    link4.innerText = "How To Play";

    p_tag.appendChild(link1);
    p_tag.appendChild(link2);
    p_tag.appendChild(link3);
    p_tag.appendChild(link4);
    footer.appendChild(p_tag);
}
