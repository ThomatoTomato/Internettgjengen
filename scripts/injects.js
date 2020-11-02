// Sjekker om brukeren er logget inn eller ikke
if (window.sessionStorage.getItem("activeUser") == null)
{
    // Ikke legg til logg inn / registrerings-knappene på forsiden
    if ( document.head.id == "Forside" ) {} 
    // Dersom man prøver å navigere seg til profil/hovedside uten å være logga inn, blir man redirigert til forsiden for innlogging / registrering
    else if ( document.title == "Profil" || document.title == "Love @ NTNU" )
    {
        window.location.href = "forside.html";
        displayRegister();
    }
    else
    {
        displayRegister();
        // Manipulerer de injecta knappene på registreringssiden
        if (document.title == "Registrering") 
        {
            document.getElementById("registerButton").style.display = "none"; 
            document.getElementById("loginButton").innerText = "Forside";
        }
    }
}
// Dersom man prøver å navigere seg til forsiden mens man er logga inn, blir man redirigert til hovedsiden
else if (document.head.id == "Forside") {window.location.href = "hovedside.html"}
else if (document.title == "Profil") {
    displayHeart()
    displayLogout()

}
else if (document.head.id == "Hovedside") {
    displayProfil();
}
else {
    displayHeart();
    displayProfil();
}

// Legger inn navigasjonsbaren
navigation();

// injecter hjertet som navigerer til hovedsiden
function displayHeart()
{
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

// injecter profilikonet som navigerer til profilsiden
function displayProfil()
{
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

// injecter logg ut knapp
function displayLogout() {
    
    let register = document.createElement("BUTTON");
    let text = document.createTextNode("Logg ut");
    register.appendChild(text);
    register.setAttribute("id", "registerButton");
    register.setAttribute("class", "iconoclast redButton");
    register.setAttribute("onclick", "logout()");

    document.body.insertBefore(register, document.body.firstChild);
}

function displayRegister()
{
    // injecter register-button
    let register = document.createElement("BUTTON");
    let text = document.createTextNode("Registrer");
    register.appendChild(text);
    register.setAttribute("id", "registerButton");
    register.setAttribute("class", "iconoclast redButton");
    register.setAttribute("onclick", "redirectRegister()");

    // injecter login-button
    let login = document.createElement("BUTTON");
    let text2 = document.createTextNode("Fortsett spill");
    login.appendChild(text2);
    login.setAttribute("id", "loginButton");
    login.setAttribute("class", "iconoclast redButton");
    login.setAttribute("onclick", "redirectForside()");

    document.body.insertBefore(register, document.body.firstChild);
    document.body.insertBefore(login, document.body.firstChild);
}

// disse er teite men de er her fordi det ikke funka med lambda når jeg skulle sette attribute..
function redirectRegister() { window.location.href = 'registrering.html'; }
function redirectForside() { window.location.href = 'forside.html'; }

// logger ut brukeren
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
