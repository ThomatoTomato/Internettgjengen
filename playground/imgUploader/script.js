let imgUploader = document.getElementById("imgUploader");
let imgInBase64;

imgUploader.addEventListener("change", function() {
  let fileReader = new FileReader();
  fileReader.readAsDataURL(imgUploader.files[0]);
  fileReader.onloadend = function(event) {
    imgInBase64 = String(event.target.result);
    let sessionStorage = window.sessionStorage;
    sessionStorage.setItem("imgInBase64", imgInBase64);
    window.location.href = "transferImgToHere.html";
  }
});
