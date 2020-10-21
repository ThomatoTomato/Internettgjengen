let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("passord").value;
  let localStorage = window.localStorage;

  // Looper gjennom alle registrerte brukere i localStorage.
  for (let i=1; i<=parseInt(localStorage.getItem("idIterator")); i++) {
    localStorageObj = JSON.parse(localStorage.getItem("person" + i));
    if (localStorageObj.email == email && localStorageObj.password == password) {
      let sessionStorage = window.sessionStorage;
      sessionStorage.setItem("activeUser", JSON.stringify(localStorageObj));
      window.location.href = "hovedside.html";
    }
  }
});
