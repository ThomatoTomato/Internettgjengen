// Intialiserer sessionObject og henter ut active user
let sessionStorage = window.sessionStorage;
let activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

// ~~~~ MATCHER ~~~~
let matches = [];

// Funksjon for å generere matcher
function generateMatch(bildeUrl, bio, navn, alder, activeIn, interests, exphGrad, born, answers) {
  let matchObj = {
    bilde: bildeUrl, // Filepath til bildet
    bio: bio,
    navn: navn,
    alder: alder,
    activeIn: activeIn,
    interests: interests,
    exphGrad: exphGrad,
    born: born,
    answers: answers,
    chatView: ""
  };
  return matchObj;
}

// Matcher
matches.push(generateMatch("img/profilbilder/E1.jpg", "Tror du på kjærlighet ved første blikk eller skal jeg sende deg et nytt bilde?", "Tom", "22", "Samfundet", "Bordtennis og skrekkfilmer", "D", "19.12.1997", ["Vil du spille bordtennis på stripa i morgen?", "så fin du er", "hei", "hva gjør du på", "Vil du spise lunsj i hangaren klokken 12?", "så kule interesser du har"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Leter etter noen å dele livet med og som deler min begeistring for Fourierrekker", "Jon","25","På jakt etter nye verv", "Fotball og Fourieranalyse", "F", "05.06.1995", ["hei", "du er awsome", "Liker du best Fotball eller Foureranalyse?", "Minigolf i helgen?", "hva skjer?"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Er titianic en bra nok icebreaker for deg?", "Tomine","24","Solist i koret musika", "Henge med venner", "C", "04.08.1996",["hei", "du er awsome", "hva skjer?", "Vil du booke et grupperom med meg på onsdag?", "kult", "så snill du er"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Utdanner meg til å bli morgendagens leder. Jeg spander kanelbolle i hangaren om du dmer meg! Pappa betaler ;)", "Maximiliam", "22", "festsjef", "Ledelse og fest","E", "19.11.1998", ["Halla", "wow!", "Gjorde det vondt når du falt ned fra himmelen?"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Hvis alle mennesker var en blomst ville jeg plukket deg","Gustav", "20", "KMK", "blomster og surfing", "B","19.02.2000", ["Hei", "vil du bli min rose?", "kult å prate med deg", "jeg elsker taco, gjør du?", "blir du med å spise kanellbolle på onsdag?", "halla"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Hvis alle yter etter evne og nyter etter behov blir verden en bedre plass<3 Send meg en melding hvis du vil yte og nyte sammen med meg ;)", "Karl", "21", "styremedlem i rrf", "politikk og velferd", "A", "13.04.1999", ["Hei kamerat", "vil du bli med å gjøre verden bedre", "Hvem er din favoritt filosof?"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Livet er ikke bare en lek det er også en dans på roser! Jeg elsker kanelboller, livet og piler. ", "Jostein", "21", "leder for funktorkluben", "matematikk", "E", "15.04.1999", ["Hei", "vil du bli med å spille shuffel board i pause?", "du er stilig!", "du har nydelig øyne", "jeg tror jeg er forelsket i deg", "Yo!"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Jeg har bodd i Kina. Hvis du er heldig kan du få smake min spesialsuppe jeg lært å lage i Kina. Det vil du ikke gå glipp av så send meg en melding! ", "Ola", "21", "sosialsjef i linjeforeningen", "Suppe og dans", "C", "11.08.1999", ["Hei", "Så du har lyst å smake på suppen min?", "møtes på lørdag?", "Så fint smil du har", "Du er søt", "fikk du også C i exphil? Kult", "Hva er det beste med å være så vakker?"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Oppvokst på Laksevåg, Bergens vestkant. Jeg studerer kybernetikk og robotikk og elsker det! Hvis du og liker roboter tror jeg vi kan bli en bra match! ", "Remy", "23", "robotbyggemester", "roboter og satelitter", "F2", "19.08.1997", ["Hei", "møtes på lørdag?", "Så fint smil du har", "Du er søt", "vil du øve til Exphil sammen?", "roboter er så kult, ikke sant?"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Leter etter noen å dele bolig med fra høste. Da blir jeg kastet ut av kollektivet mitt fordi jeg har bodd der i 5 år. Men det er en god mulighet til å flytte sammen med deg!", "Sverre", "28", "Isfit", "alt annet en studier", "F", "19.08.1993", ["Hei",  "Er du hypp på å bli bedre kjent?", "Lyst til å ta en kaffe en dag?", "kult!", "For en morsom bio du har! HAHA!", "du er kul", "Jeg har mistet mitt mobilnr, kan jeg få ditt?"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Æ e trønder og stolt av d. Hvis du er østlendig bare dropp å sende melding. Det samme gjelder om du heier på Brann eller Molde. Hvis ikke vil jeg gjerne bli kjent:)", "Lise", "23", "fotballtrener", "fotball og karsk", "F2", "07.08.1997", ["Hei", "blir du med på lerkendal og se kamp i helgen?", "aritg", "lol", "du er så morsom", "hahah"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Jeg lever på grandiosa og mellombar. Søker derfor etter en som kan lage mat, gjerne også bake. Jeg tar med vin hvis du inviterer meg på middag", "Sussane", "19", "Økosjef", "netflix & chill", "D", "05.09.2001", ["Hallo", "haha", "gøy å se deg her", "vin og middag på søndag?"]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Jeg kan integrere og kan fortelle deg alt om sokrates. Jeg kan også rygge med henger og danse cha-cha-cha. Det er ganske unikt. Men jeg kan ikke flørte desverre.", "Fredrik", "22", "er mellom verv for tiden", "filosofi og derivering", "A", "18.10.1998", ["Hei og hopp", "hvis du hadde vært et tall mellom 1 og 10 hadde du vært 6 fordi du er perfekt", "kult", "Er alt bra? Det er et langt fall fra himmelen."]));
matches.push(generateMatch("img/profilbilder/E1.jpg", "Studerer Bygg og Miljø, fjerde året, tredje klasse. Elsker betong og stål. Er også glad i en fest eller to. Dater folk uavhengig av hva de syns om betong.", "Tommy", "24", "byggmester", "Betong og løping", "B", "03.01.1996", ["halla", "liker du stål eller betong best?", "Du ser akkurat ut som min kommende kjæreste"]));

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
  let exphGrad;

  // Hvis person ikke har bestått exphil
  if (yourMatch.exphGrad == "F2") {
    exphGrad = "Har ikke tatt Exphil";
  }
  else {
    exphGrad = yourMatch.exphGrad;
  }

  document.getElementById("pbilde").src = yourMatch.bilde;
  document.getElementById("profiltekst").innerHTML = yourMatch.bio;
  document.getElementById("navnAlder").innerHTML = "<b>" + yourMatch.navn + "</b> " + yourMatch.alder;
  document.getElementById("activeInMatch").innerHTML = "<b>Verv:</b> " + yourMatch.activeIn;
  document.getElementById("interestsMatch").innerHTML = "<b>Interesser:</b> " + yourMatch.interests;
  document.getElementById("exphGrad").innerHTML = "<b>Karakter i Ex.Phil:</b> " + exphGrad;
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
    if (activeMatch === null) { console.log("no match found"); return; }
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
