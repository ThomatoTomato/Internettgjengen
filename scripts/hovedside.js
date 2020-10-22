function back() {
    document.getElementById("side2").style = "display: none;"
    document.getElementById("hjerte").style = "display: none;"
    document.getElementById("side1").style = "display: flex;"
  }

function chat() {
    document.getElementById("side1").style = "display:none;"
    document.getElementById("side2").style = "display:inline-flex;"
    document.getElementById("hjerte").style = "display:block"
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
    message = chatBotMessage();
    name = document.createTextNode("Match: ");
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

// returnerer en random chat-string
function chatBotMessage()
{
  messages = ['hei', 'du er kul', 'vil du booke et grupperom sammen?'];
  return messages[Math.round(Math.random()*(messages.length-1))];
}

document.getElementById("chatbar").addEventListener("keydown", function(key) {
  if(key.keyCode == 13){
      key.preventDefault();
      displayMessage('user');
  }
});


