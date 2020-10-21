let submit = document.getElementById("knapp");

submit.addEventListener("click", function() {
  // Her kommer form validation
  let email = document.getElementById("email").value;
  let password = document.getElementById("passord").value;
  let gpassword = document.getElementById("gpassord").value;
  let born = document.getElementById("Født").value;
  let name = document.getElementById("navn").value;
  let volunteering = document.getElementById("verv").value;
  let interests = document.getElementById("Interesser").value;
  let grade = document.getElementById("Karakter").value;



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
});
