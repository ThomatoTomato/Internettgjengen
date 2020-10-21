let login = document.getElementById("login");

login.addEventListener("click", function() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("passord").value;
  let localStorage = window.localStorage;

  if (email.substring(email.length - 7) != "ntnu.no" ) 
  {
    window.alert("Oops! Her ser det ut som du ikke har brukt en NTNU-email!");
  }

  // Looper gjennom alle registrerte brukere i localStorage.
  for (let i=1; i<=parseInt(localStorage.getItem("idIterator")); i++) {
    localStorageObj = JSON.parse(localStorage.getItem("person" + i));
    if (localStorageObj.email == email && localStorageObj.password == password) {
      let sessionStorage = window.sessionStorage;
      sessionStorage.setItem("activeUser", JSON.stringify(localStorageObj));
      window.location.href = "hovedside.html";
    }
  }

  window.location.href = "hovedside.html"
});

let registrering = document.getElementById("registrering")

registrering.addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("passord").value;
  let sS = window.sessionStorage;

  sS.setItem("emailReg", email)
  sS.setItem("passwordReg", password)

  window.location.href = "registrering.html"
})