gsap.registerPlugin(ScrollTrigger);

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
