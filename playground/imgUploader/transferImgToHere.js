let insertImg = document.getElementById("insertImg");
let sessionStorage = window.sessionStorage;
insertImg.src = sessionStorage.getItem("imgInBase64");
insertImg.style.width = "300px"
insertImg.style.height = "auto";
