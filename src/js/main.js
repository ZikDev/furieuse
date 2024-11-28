import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Header
// Introduction du site avec un effet de parallax

const tlHeader = gsap.timeline({
  scrollTrigger: {
    trigger: ".l-header",
    start: "bottom bottom",
    end: "=+800",
    pin: ".l-header",
    scrub: 2,
    anticipatePin: 1,
    markers: false,
  },
});

tlHeader.from(
  ".header-background .panel2",
  {
    y: 200,
  },
  0
);

tlHeader.from(
  ".header-background .panel3",
  {
    y: 300,
  },
  0
);

tlHeader.from(
  ".header-background .panel4",
  {
    y: 400,
  },
  0
);

tlHeader.to(
  ".header-background .panel3",
  {
    rotateX: 0,
  },
  1
);

// Storytelling
// Scrolling horizontal

const scene1 = gsap.timeline();
scene1
  .from(".scene1 .panel2", { xPercent: -100, duration: 3 }, 0)
  .from(".scene1 .panel3", { xPercent: 100, duration: 3 }, 3)
  .from(".scene1 .panel4", { yPercent: -100, duration: 3 }, 6);

const scene2 = gsap.timeline();
scene2
  .from(".scene2 .panel2", { yPercent: 100, duration: 3 }, 0)
  .from(".scene2 .panel5", { yPercent: 100, duration: 3 }, 0)
  .from(".scene2 .panel4", { yPercent: 100, duration: 3 }, 0)
  .from(".scene2 .panel3", { xPercent: 100, duration: 3 }, 3)
  .to(".scene2 .panel5", { x: 15, y: -10, duration: 3 }, 6);

const scene3 = gsap.timeline();
scene3
  .from(".scene3 .panel2", { yPercent: 100, duration: 3 }, 0)
  .from(".scene3 .panel3", { xPercent: -100, duration: 3 }, 3)
  .from(".scene3 .panel4", { xPercent: 100, duration: 3 }, 6)
  .from(".scene3 .panel5", { xPercent: 100, duration: 3 }, 6);

const scene4 = gsap.timeline();
scene4
  .from(".scene4 .panel2", { yPercent: 100, duration: 3 }, 0)
  .from(".scene4 .panel3", { xPercent: -100, duration: 3 }, 3)
  .from(".scene4 .panel4", { yPercent: -100, duration: 3 }, 6);

const scene5 = gsap.timeline();
scene5
  .from(".scene5 .panel2", { xPercent: -100, duration: 3 }, 0)
  .from(".scene5 .panel4", { yPercent: 100, duration: 3 }, 0)
  .from(".scene5 .panel3", { yPercent: -100, duration: 3 }, 3);

const scene6 = gsap.timeline();
scene6
  .from(".scene6 .panel2", { yPercent: 100, duration: 3 }, 0)
  .from(".scene6 .panel3", { xPercent: 100, duration: 3 }, 3)
  .from(".scene6 .panel5", { xPercent: -100, duration: 3 }, 3)
  .from(".scene6 .panel4", { yPercent: -100, duration: 3 }, 6);

const scene7 = gsap.timeline();
scene7
  .from(".scene7 .panel2", { xPercent: -100, duration: 3 }, 0)
  .from(".scene7 .panel3", { xPercent: -100, duration: 3 }, 0)
  .from(".scene7 .panel5", { xPercent: 100, duration: 3 }, 3)
  .from(".scene7 .panel4", { yPercent: -100, duration: 3 }, 6);

const scene8 = gsap.timeline();
scene8
  .from(".scene8 .panel2", { xPercent: -100, duration: 3 }, 0)
  .from(".scene8 .panel3", { xPercent: -100, duration: 3 }, 0)
  .from(".scene8 .panel4", { xPercent: 100, duration: 3 }, 3)
  .to(".scene8 .panel2", { x: 40, duration: 3 }, 6)
  .from(".scene8 .panel5", { yPercent: -100, duration: 3 }, 9);

const scene9 = gsap.timeline();
scene9
  .from(".scene9 .panel5", { yPercent: 100, duration: 3 }, 0)
  .from(".scene9 .panel3", { xPercent: -100, duration: 3 }, 3)
  .from(".scene9 .panel4", { xPercent: -100, duration: 3 }, 3)
  .to(".scene9 .panel3", { xPercent: 100, duration: 3 }, 6)
  .to(".scene9 .panel4", { xPercent: 100, duration: 3 }, 6);

const tl = gsap.timeline();
tl.add(scene1)
  .to(".scene1", { rotate: 0, duration: 2 })
  .from(".scene2", { xPercent: 100, duration: 2 })
  .add(scene2)
  .to(".scene2", { rotate: 0, duration: 2 })
  .from(".scene3", { xPercent: 100, duration: 2 })
  .add(scene3)
  .to(".scene3", { rotate: 0, duration: 2 })
  .from(".scene4", { xPercent: 100, duration: 2 })
  .add(scene4)
  .to(".scene4", { rotate: 0, duration: 2 })
  .from(".scene5", { xPercent: 100, duration: 2 })
  .add(scene5)
  .to(".scene5", { rotate: 0, duration: 2 })
  .from(".scene6", { xPercent: 100, duration: 2 })
  .add(scene6)
  .to(".scene6", { rotate: 0, duration: 2 })
  .from(".scene7", { xPercent: 100, duration: 2 })
  .add(scene7)
  .to(".scene7", { rotate: 0, duration: 2 })
  .from(".scene8", { xPercent: 100, duration: 2 })
  .add(scene8)
  .to(".scene8", { rotate: 0, duration: 2 })
  .from(".scene9", { xPercent: 100, duration: 2 })
  .add(scene9)
  .to(".scene9", { rotate: 0, duration: 2 });

ScrollTrigger.create({
  animation: tl,
  trigger: ".storytelling",
  start: "top top",
  end: "+=9000",
  scrub: 1,
  pin: true,
  anticipatePin: 1,
});

// Shop
// Change le texte du shop en fontion de l'onglet cliqué

const resume = document.querySelector(".shop-onglet-resume");
const createur = document.querySelector(".shop-onglet-createurs");
const textResume = document.querySelector(".shop-paragraphe-resume");
const texteCreateur = document.querySelector(".shop-paragraphe-createurs");

function verifierCondition() {
  if (resume.classList.contains("font-link-on")) {
    createur.addEventListener("click", function () {
      texteCreateur.classList.toggle("shop-hide"),
        textResume.classList.toggle("shop-hide"),
        createur.classList.toggle("font-link-on"),
        resume.classList.toggle("font-link-on"),
        createur.classList.toggle("font-link-off"),
        resume.classList.toggle("font-link-off");
    });
  } else {
    resume.addEventListener("click", function () {
      texteCreateur.classList.toggle("shop-hide"),
        textResume.classList.toggle("shop-hide"),
        createur.classList.toggle("font-link-on"),
        resume.classList.toggle("font-link-on"),
        createur.classList.toggle("font-link-off"),
        resume.classList.toggle("font-link-off");
    });
  }
  setTimeout(verifierCondition, 500);
}

verifierCondition();

// Loading screen
// Le temps que les images chargent

const loading = document.querySelector(".loading");
const content = document.querySelector(".content");

document.body.style.overflow = "hidden";

window.addEventListener("load", function () {
  loading.classList.add("loading-hide");
  document.body.style.overflow = "auto";
});
