let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".wall", 10, {y: -200})
  .to(".bigwall", 4, {y: 100},"-=10")
  .fromTo(".background", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .to(".main-title", 10, {y: -300,x:-1000 }, "-=10")

  let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "300%",
    triggerHook: 0,
  })
    .setTween(timeline)
    .addTo(controller)


