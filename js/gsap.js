gsap.registerPlugin(ScrollTrigger);

gsap.to('#header-background-image', {
  y: 400,
  opacity: 0,
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0
  }
});

