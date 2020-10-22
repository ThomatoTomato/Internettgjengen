{ //Lager et scope som copy-paster informasjon fra forsiden man skriver inn i forsiden, hvis det finnes
  //Denne informasjonen er lagret i sessionstorage og skal fjernes etter den er limt inn i formet.
  let sS = sessionStorage
  let email = sS.getItem("emailReg")
  let password = sS.getItem("passwordReg")
  
  if (email != "") {
    document.getElementById("email").value = email
  } 
  if (password != "") {
    document.getElementById("passord").value = password
  }

  sS.setItem("emailReg", "")
  sS.setItem("passwordReg", "")
}

//let submit = document.getElementById("knapp");
let form = document.getElementById("form");

form.addEventListener("submit", function() {
  // Her kommer form validation
  let email = document.getElementById("email").value;
  let password = document.getElementById("passord").value;
  let gpassword = document.getElementById("gpassord").value;
  let born = document.getElementById("Født").value;
  let name = document.getElementById("navn").value;
  let volunteering = document.getElementById("verv").value;
  let interests = document.getElementById("Interesser").value;
  let grade = document.getElementById("Karakter").value;

  if ( email.substring(email.length - 7) != "ntnu.no" ) 
  {
    window.alert("Oops! Her ser det ut som du ikke har brukt en NTNU-email!");
    return null // Bruker denne for å hoppe
  }
  if ( password != gpassword )
  {
    window.alert("Pass på å skrive passordet likt i begge felt!")
    return null
  }



  // Følgende kode skal gjøre iffffffff form validation er suksessfult.
  // Vi lagrer et objekt i localStorage for brukeren som blir registrert.
  let localStorage = window.localStorage;

  // Hvis det aldri har blitt lagret en bruker på enheten før, initialiseres
  // et unikt identifikatorobjekt i localStorage.
  if (localStorage.getItem("idIterator") === null) {
    localStorage.setItem("idIterator", 1);
  }
  // Hvis et slikt objekt allerede finnes, legger vi til 1 for å få en ny unik id.
  else {
    localStorage.setItem("idIterator", parseInt(localStorage.getItem("idIterator"))+1);
  }

  let objectToBeStored = {
    id: parseInt(localStorage.getItem("idIterator")),
    email: email,
    password: password,
    born: born,
    name: name,
    volunteering: volunteering,
    interests: interests,
    grade: grade
  };

  localStorage.setItem("person" + localStorage.getItem("idIterator"), JSON.stringify(objectToBeStored));

  window.location.href = "hovedside.html"
});
