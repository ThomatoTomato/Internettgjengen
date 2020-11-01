let sessionStorage = window.sessionStorage;
let activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

// Setter inn alle verdiene fra activeUser
document.getElementById("email").value = activeUser.email;
document.getElementById("passord").value = activeUser.password;
document.getElementById("gpassord").value = activeUser.password;
document.getElementById("Født").value = activeUser.born;
document.getElementById("navn").value = activeUser.name;
document.getElementById("verv").value = activeUser.volunteering;
document.getElementById("Interesser").value = activeUser.interests;
document.getElementById("Karakter").value = activeUser.grade;
document.getElementById("bio").value = activeUser.bio;

// Vi vil at bildeopplasting skal trigges når man trykker på bildet.
var pbBox = document.getElementById("pbBox");
var imgInput = document.getElementById("img");
pbBox.addEventListener("click", function() {
  imgInput.click()
});

// Endrer bilde
var imgObj = new Image();
imgObj.src = activeUser.profileImg;
pbBox.innerHTML = "";
pbBox.style["background-image"] = "url('" + imgObj.src + "')";
pbBox.style["background-size"] = "cover";


// Vi vil jo selvfølgelig endre profilting.
// Her gjør vi det.

// Hele bildegreia på nytt.
var imgInBase64 = activeUser.profileImg;
let imgUploader = document.getElementById("img");
imgUploader.addEventListener("change", function() {
  let fileReader = new FileReader();
  // Dersom man allerede har lastet opp et profibilde og skal laste opp et nytt men trykker avbryt
  // vil fileReader.readAsDataURL kaste en error, men det er ingenting som ikke funker selv om denne
  // erroren blir kastet, derfor catcher jeg den istedenfor at den blir kastet ut i konsoll.
  try {
    fileReader.readAsDataURL(imgUploader.files[0]);
  }
  catch(err) {
    return 0;
  }
  fileReader.onloadend = function(event) {
    imgInBase64 = event.target.result;

    // Vi endrer bakgrunnsbildet når et nytt er lastet opp
    // Samt fjerner det som var der fra før
    var imgObj = new Image();
    imgObj.src = imgInBase64;
    pbBox.innerHTML = "";
    pbBox.style["background-image"] = "url('" + imgObj.src + "')";
    pbBox.style["background-size"] = "cover";
  }
});

let submit = document.getElementById("form");

// La oss lytte etter at noen vil endre profilen sin.
submit.addEventListener("submit", function(event) {
  // Gjør det slik at formen ikke submitter
  event.preventDefault()

  // Deklarerer de variablene vi trenger
  let email = document.getElementById("email").value;
  let password = document.getElementById("passord").value;
  let gpassword = document.getElementById("gpassord").value;
  let born = document.getElementById("Født").value;
  let name = document.getElementById("navn").value;
  let volunteering = document.getElementById("verv").value;
  let interests = document.getElementById("Interesser").value;
  let grade = document.getElementById("Karakter").value;
  let bio = document.getElementById("bio").value;

  // Vi endrer localStorage objektet.
  let localStorage = window.localStorage;

  let objectToBeStored = {
    id: parseInt(activeUser.id),
    email: email,
    password: password,
    bio: bio,
    born: born,
    name: name,
    volunteering: volunteering,
    interests: interests,
    profileImg: imgInBase64,
    grade: grade
  };

  // Så lagrer vi alt i session og local
  localStorage.setItem("person" + activeUser.id, JSON.stringify(objectToBeStored));

  let sessionStorage = window.sessionStorage;
  sessionStorage.setItem("activeUser", JSON.stringify(objectToBeStored));
  window.location.href = "profil.html";
});


// Jeg copy-pasta hele greia di inn her Thomas
// Vi bør vel strengt tatt ha en felles fil

{
// Jeg ønsker å bake inn form validation inn i formen
// Formen er laget slik at den håndterer alt, utenom å sjekke at passordet stemmer
// Ønsker også å legge til egne meldinger når emailen er FEIL

  const email = document.getElementById("email")
  const passord = document.getElementById("passord")
  const gpassword = document.getElementById("gpassord")
  const født = document.getElementById("Født")
  const navn = document.getElementById("navn")
  const exphil = document.getElementById("Karakter")

  // Først starter vi å lytte på inputet. På hvert tastetrykk sjekker vi om du har en gyldig epost adresse.
  email.addEventListener("input", (_event) => {
    email.setCustomValidity("")
    email.checkValidity()
  })

  // Her displayer jeg egendefinerte meldinger basert på hvordan du har tastet inn epostadressen
  email.addEventListener("invalid", (_event) => {
    if (email.validity.patternMismatch) { // Denne virker på RegExen som står i HTML
      email.setCustomValidity("Dette er ikke en NTNU adresse!")
    }
    else if (email.validity.typeMismatch) {
      email.setCustomValidity("Dette er ikke en epost adressse")
    }
  })

  // Lytte passord
  passord.addEventListener("input", (_event) => {
    passord.setCustomValidity("")
    passord.checkValidity()
  })

  // Lage egendefinerte meldinger
  passord.addEventListener("invalid", (_event) => {
    passord.setCustomValidity("Fyll inn et passord")
  })

  // Lytte gjnta passord
  gpassword.addEventListener("input", (_event) => {
    if (passord.value != gpassword.value) { //Lager en egendefinert validation. Hvis denne er true så er feltet invalid.
      gpassword.setCustomValidity("Passordene samsvarer ikke")
    }
    else {
      gpassword.setCustomValidity("")
    }
    gpassword.checkValidity()
  })

  // Lager egendefinerte meldinger
  gpassword.addEventListener("invalid", (_event) => {
    if (gpassword.validity.valueMissing) {
      gpassword.setCustomValidity("Fyll inn passordet")
    }
  })

  // Lytter på fødsel
  født.addEventListener("input", (_event) => {
    født.setCustomValidity("")
    født.checkValidity()
  })

  // Lager egendefinerte medlinger
  født.addEventListener("invalid", (_event) => {
    if (født.validity.rangeOverflow) { // Denne virker på maxen som står i HTML
      født.setCustomValidity("Du er visst for ung")
    }
    else if (født.validity.valueMissing) {
      født.setCustomValidity("Fyll inn fødselsdato")
    }
  })

  // Lytter navn
  navn.addEventListener("input" , (_event) => {
    navn.setCustomValidity("")
  })

  // Lager egendefinerte meldnger
  navn.addEventListener("invalid", (_event) => {
    navn.setCustomValidity("Fortell meg hva du heter")
  })

  // Går i Exphil forelesninger
  exphil.addEventListener("input", (_event) => {
    exphil.setCustomValidity("")
    exphil.checkValidity()
  })

  // Rekker opp hånden for å få den jævla idioten på 8 rad til å holde skjeft!
  exphil.addEventListener("invalid", (_event) => {
    exphil.setCustomValidity("Hva fikk du i Ex.Phil?")
  })
}
