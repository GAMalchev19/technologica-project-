const arrowToAbout = document.querySelector('.arrowToAbout');
const arrowToIntro = document.querySelector('.arrowToIntro');

function onArrowToAboutPress(){
    arrowToIntro.classList.add("arrowToIntro_shown");
    arrowToAbout.classList.remove("arrowToAbout_shown");
}

function onArrowToIntroPress(){
    arrowToIntro.classList.add("arrowToInto_hidden");
    arrowToIntro.classList.remove("arrowToIntro_shown");
    arrowToAbout.classList.remove("arrowToAbout_hidden");
    document.getElementById('arrowToAbout').style.animationDelay = ".4s";
    arrowToAbout.classList.add("arrowToAbout_shown");
}

function resetOverlay(){
    document.querySelector('.overlaynt').classList.remove("overlay");
    console.log("I remove overlay yes");
}