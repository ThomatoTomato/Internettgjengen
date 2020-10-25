// Intialiserer sessionObject og henter ut active user
let sessionStorage = window.sessionStorage;
let activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

// ~~~~ MATCHER ~~~~
let matches = [];

// Funksjon for å generere matcher
function generateMatch(bildeUrl, bio, navn, alder, linje, activeIn, interests, exphGrad, born, answers) {
  let matchObj = {
    bilde: bildeUrl, // Filepath til bildet
    bio: bio,
    navn: navn,
    alder: alder,
    linje: linje,
    activeIn: activeIn,
    interests: interests,
    exphGrad: exphGrad,
    born: born,
    answers: answers,
    chatView: ""
  };
  return matchObj;
}

matches.push(generateMatch("img/profilbilder/E1.jpg", "Monader er egt bare en monoide i kategorien av endofunktorer. Hva er så vanskelig med det?", "Thomas Thorbjørnsen", "21", "Bachelor i matematiske fag","Hackerspace, Realfagsdagene","Monader", "C", "01.05.1999", ['hei', 'du er kul', 'vil du booke et grupperom sammen?']));
matches.push(generateMatch("https://3.bp.blogspot.com/-99GXeCJkLuE/UXL8mClxm0I/AAAAAAAACUw/JTenHOuNbx0/w1200-h630-p-k-no-nu/bilde.jpg", "Hei, jeg heter Magnus. Hva faen heter du?", "Magnus", "21", "En linje på NTNU", "Orbit NTNU", "BURN: Bruk koden Magnus15 for 15% avslag på Burn.", "B", "13.01.1999", ['hei', '*flammeemoji*', 'burn baby burn']));
matches.push(generateMatch("https://www.fosna-folket.no/incoming/article9783978.ece/ALTERNATES/w380-default/DSC_2420.JPG", "Hei hei hei, jeg heter Martin, hei hei hei hva heter du?", "Martin", "21", "En linje på NTNU", "Kaffedrikker", "løping", "D", "23.03.99", ['yo', 'fikk du også D i exphil? hvis ikke kan du få min ;))', 'gotta go fast']));
matches.push(generateMatch("img/Indok-styret/maren.jpg","Hei, jeg er vennen til Thomas, men jeg er på utkikk etter flere venner. Vil du være vennen min?", "Maren Sandhaug", "21", "Bachelor i informatikk", "Thomas", "Være med Thomas", "A", "08.10.99", ['hællæ', 'hjertet mitt slår i 4:5 polyrytme når jeg ser deg', 'sorry jeg kan egt ikke prate nå, gjør algdat']));
matches.push(generateMatch("img/Indok-styret/sarah.jpg", "Skapkommunist, ja visst. Vil du bli min comrade?", "Sarah", "22", "En linje på NTNU", "Rød ungdom", "Maos lille røde", "B", "19.10.98", ['hei', 'er du kommunist?', 'favorittfargen min er rød']));

console.log(matches.length);

let matchIndexer = 0;
let matchesThatSatisfyReqs =  [];
let activeMatch = null;

// Denne funksjonen finner alle matcher med samme exphil karakter, og legger på listeners på
// click på LEFT og RIGHT events.
function intializeMatches(gradeReq) 
{
  for (var i=0; i<matches.length; i++) {
    if (matches[i].exphGrad == gradeReq) {
      matchesThatSatisfyReqs.push(matches[i]);
    }
  }
  displayMatchbyIndex(matchIndexer);

  document.getElementById("leftArrow").addEventListener("click", function() {
    matchIndexer = matchIndexer - 1;
    if (matchIndexer == -1) {
      matchIndexer = matchesThatSatisfyReqs.length - 1;
    }
    displayMatchbyIndex(matchIndexer);
  });

  document.getElementById("rightArrow").addEventListener("click", function() {
    matchIndexer = matchIndexer + 1;
    if (matchIndexer == matchesThatSatisfyReqs.length) {
      matchIndexer = 0;
    }
    displayMatchbyIndex(matchIndexer);
  });

  return
}

function displayMatchbyIndex(index) 
{

  yourMatch = matchesThatSatisfyReqs[index];
  activeMatch = yourMatch;

  document.getElementById("pbilde").src = yourMatch.bilde;
  document.getElementById("profiltekst").innerHTML = yourMatch.bio;
  document.getElementById("navnAlder").innerHTML = "<b>" + yourMatch.navn + "</b>" + yourMatch.alder;
  document.getElementById("linje").innerHTML = "<b>Linje:</b> " + yourMatch.linje;
  document.getElementById("activeInMatch").innerHTML = "<b>Aktiv i:</b> " + yourMatch.activeIn;
  document.getElementById("interestsMatch").innerHTML = "<b>Interesser:</b> " + yourMatch.interests;
  document.getElementById("exphGrad").innerHTML = "<b>Karakter i Ex.Phil:</b> " + yourMatch.exphGrad;
  document.getElementById("born").innerHTML = "<b>Født:</b> " + yourMatch.born;
  document.getElementById("chatview").innerHTML = yourMatch.chatView;

}


function back() {
    document.getElementById("side2").style = "display: none;"
    document.getElementById("hjerte").style = "display: none;"
    document.getElementById("side1").style = "display: flex;"
  }

function chat() {
    document.getElementById("side1").style = "display:none;"
    document.getElementById("side2").style = "display:inline-flex;"
    document.getElementById("hjerte").style = "display:block"
    intializeMatches(activeUser.grade);
}

function displayMessage(caller)
{

  var chatview = document.getElementById("chatview");

  var nameNode = document.createElement("p");
  var message;
  var name;

  if (caller === 'user')
  {
    message = document.getElementById("chatbar").value;
    name = document.createTextNode("Du: ");
    nameNode.setAttribute("class", "userChatID");
    // clearer chatboxen :))
    document.getElementById("chatbar").value = "";
  }
  else if (caller === "bot")
  {
    message = activeMatch.answers[Math.round(Math.random()*(activeMatch.answers.length-1))];
    name = document.createTextNode(activeMatch.navn+": ");
    nameNode.setAttribute("class", "botChatID");
  }
  else { console.log("unknown caller of displayMessage(), pls check ur shit"); }

  nameNode.appendChild(name);

  var messageNode = document.createElement("p");
  var textNode = document.createTextNode(message);
  messageNode.appendChild(textNode);
  messageNode.setAttribute("class", "chatMessage");

  chatview.appendChild(nameNode);
  chatview.appendChild(messageNode);
  chatview.appendChild(document.createElement("br"));
  // scroller til bunn av chat på ny mld
  chatview.scrollTop = chatview.scrollHeight;

  if (caller === "user") { displayMessage("bot"); }
}


document.getElementById("chatbar").addEventListener("keydown", function(key) {
  if(key.keyCode == 13){
      key.preventDefault();
      displayMessage('user');
      // Her lagrer vi chatten til brukeren det chattes til
      matchesThatSatisfyReqs[matchIndexer].chatView = document.getElementById("chatview").innerHTML; // Dette funker ikke da
  }
});
