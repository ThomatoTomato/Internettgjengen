/*Lager funksjon for å scrolle til toppen på en smud måte fra bunnen av siden*/ 
/*Denne må taes inn på hver HTML side*/

function scrollToTop() {
    let time = 400;
    let scrollPos = window.scrollY;
    if (scrollPos == 0) {
        return true;
    }
    else {
        let loopRoundsTotal = Math.ceil(time/16);
        let pixelMovePerLoop = Math.ceil(scrollPos/loopRoundsTotal);
        let loopRoundsNow = 0;
        var scrollTopInterval = setInterval(function() {
            if (window.scrollY == 0) {
                clearInterval(scrollTopInterval);
            }
            scrollPos -= pixelMovePerLoop;
            window.scrollTo(0, scrollPos);
            loopRoundsNow++;
        }, 16);
    }
}
let scrollTopButton=document.getElementById("scrollTop");
scrollTopButton.addEventListener("click",function() {
    scrollToTop();
});

