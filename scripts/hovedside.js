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


function displayMessage()
{
  var message = document.getElementById("chatbar").value;
  console.log(message);
}

function chatBotMessage()
{
  /* Genererer og displayer chatbot-melding på random elns */ 
}

document.getElementById("chatbar").addEventListener("keydown", function(key) {
  if(key.keyCode == 13){
      key.preventDefault();
      displayMessage();
      document.getElementById("chatbar").value = "";
  }
});
