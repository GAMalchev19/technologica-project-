let tl = gsap.timeline({ paused: true });
let dur = 3;
tl.to(".game-art-container", {
  duration: dur,
  y: "315vh",
  ease: "power1.inOut",
})
  .to(
    ".intro-art-container",
    {
      duration: dur,
      y: "300vh",
      ease: "power1.inOut",
    },
    0
  )
  .to(
    ".sections-container",
    {
      duration: dur,
      y: "300vh",
      ease: "power1.inOut",
    },
    0
  )
  .to(".intro-art-container", {
    display: "none",
  })
  .to(
    ".sections-container",
    {
      duration: 1,
      opacity: 0,
      display: "none",
    },
    "-=1"
  )
  .to(".game", {
    display: "show",
  })
  .to(
    "#landing-arrow",
    {
      display: "none",
    },
    -1
  );

const btn = document.querySelector("#game-trigger");
btn.addEventListener("click", () => {
  tl.play();
});

const arrow = document.querySelector("#game-button");
arrow.addEventListener("click", () => {
  tl.reverse();
  setTimeout(function () {
    location.reload();
  }, 3550);
});
