var server = window.localStorage;
var personalia = {
  mail: "perr@stud.ntnu.no",
  password: "password",
  born: Date.now(),
  name: "Per Ronny",
  volunteer: "Koltorsjef i indok",
  interests: "Generelt bare ha et syyyykt keegt liv ass",
  exphGrade: "5te kont"
};

server.setItem("personServerObj", JSON.stringify(personalia));
var retard = server.getItem("personServerObj");
var retrievedObj = JSON.parse(retard);
console.log(retrievedObj);
