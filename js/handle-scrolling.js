let tl = gsap.timeline({paused: true});
let dur = 3;
tl.to(".game-art-container", {
    duration: dur,
    y: "215vh",
    ease: "power1.inOut"
}).to(".intro-art-container", {
    duration: dur,
    y: "100vh",
    ease: "power1.inOut"
}, 0).to(".sections-container", {
    duration: dur,
    y: "100vh",
    ease: "power1.inOut"
}, 0).to(".intro-art-container", {
    display: "none"
}).to(".sections-container", {
    display: "none"
}, "-=1").to(".game", {
    display: "show"
});

const btn = document.querySelector("#game-trigger");
btn.addEventListener("click", () => {
    tl.play();
});