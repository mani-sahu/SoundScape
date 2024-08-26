const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-1",
    start: "50% 50%",
    end: "250% 50%",
    scrub: true,
    // markers: true,
    pin: true,
}})

tl.to(".rotate-div",{
    rotate: -15,
    scale: 0.8,
}, "same")

tl.to("#row-div-2", {
    marginTop: "3%"
}, "same")

tl.to("#row-div-3", {
    marginTop: "-3%"
}, "same")

tl.to("#row-div-4", {
    marginTop: "-7%"
}, "same")

tl.to("#row-div-5", {
    marginTop: "-12%"
}, "same")

tl.to(".overlay-div h1", {
    opacity: "1",
    delay: 0.2,
}, "same")

tl.to(".overlay-div", {
    backgroundColor: "#000000b4"
}, "same")

tl.to(".scrolling", {
    width: "100%"
}, "same")