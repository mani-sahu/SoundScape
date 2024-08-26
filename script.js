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

// part-2 -------------------------------------------------------

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start: "0% 70%",
    end: "60% 60%",
    scrub: true,
    // markers: true,
    // pin: true,
}})

tl2.to(".rounded-div-wrapper",{
    height:0,
    marginTop:0 
})


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".content-2",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl3.to(".content-2 .text-area-hover h1",{
    width:"100%",
})
tl3.to(".content-2 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})