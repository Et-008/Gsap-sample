gsap.registerPlugin(ScrollTrigger);

gsap.from(".Title1", {opacity: 0, duration: 1.5, y: 200})
gsap.from(".Title2", {opacity: 0, duration: 1.5, y: "+=200"})
gsap.from(".Title3", {opacity: 0, duration: 1.5, y: 100})
gsap.from(".TitleImg", {opacity: 0, duration: 2, x: 50, ease: "elastic(1, 0.3)", delay: 1.5}, "+=6")

var t1 = gsap.timeline();

t1.fromTo([".section1"],{
    scale: 1,
    opacity: 1,
}, {
    scrollTrigger: {
        trigger: "#myCanvas",
        scrub: true,
        pin: true,
        // markers: true,
        pinSpacing: false,
        start: "top top",
        end: "80%",
        anticipatePin: 1,
    },
    opacity: 0,
    scale: 0.4,
    y: 250
})

let t2 = gsap.timeline();
t2
.fromTo(".Image1", {
    opacity: 0,
    scale: 0,
}, {scrollTrigger: {
    trigger: ".Image1",
    start: "top bottom",
    end: "+=50%",
    scrub: true,
    // markers: true,
    toggleActions: "play pause reverse pause"
}, opacity: 1, scale: 3}, "-=1")
.fromTo(".Image1",  
{
    // opacity: 1,
    // scale: 3,
},
{
    scrollTrigger: {
    trigger: ".Image1",
    start: "center center",
    end: "+=80%",
    scrub: true,
    pinSpacing: false,
    // markers: true,
    toggleActions: "play pause reverse pause"
    }, 
    opacity: 0, scale: 10, rotate: 45
})
.fromTo(".Image2", {
    opacity: 0,
    scale: 0,
    x: "+=100"
}, {scrollTrigger: {
    trigger: ".Image2",
    start: "top bottom",
    end: "+=50%",
    scrub: true,
    // markers: true,
    toggleActions: "play pause reverse pause"
}, opacity: 1, scale: 5, x: "-=100"}, "-=0.5")
.fromTo(".Image2", {}, {scrollTrigger: {
    trigger: ".Image2",
    start: "center center",
    end: "+=80%",
    scrub: true,
    pinSpacing: false,
    // markers: true,
    toggleActions: "play pause reverse pause"
}, opacity: 0, scale: 15, x: "-=200"})
.fromTo(".Image3", {
    opacity: 0,
    scale: 0,
    x: "+=100"
}, {scrollTrigger: {
    trigger: ".Image3",
    start: "top bottom",
    end: "+=50%",
    scrub: true,
    // markers: true,
    toggleActions: "play pause reverse pause"
}, opacity: 1, scale: 5, x: "-=100"}, "-=0.5")
.fromTo(".Image3", {}, {scrollTrigger: {
    trigger: ".Image3",
    start: "center center",
    end: "+=80%",
    scrub: true,
    pinSpacing: false,
    // markers: true,
    toggleActions: "play pause reverse pause"
}, opacity: 0, scale: 15, x: "-=200"})
.fromTo(".Image4", {
    opacity: 1,
    scale: 0,
    rotate: 55,
    x: "-=100",
    y: "+=150",
}, {scrollTrigger: {
    trigger: ".Image4",
    start: "top top",
    end: "50%",
    scrub: true,
    // markers: true,
    toggleActions: "play pause reverse pause"
    }, 
    opacity: 1, 
    scale: 2.5,
    x: "-=250",
    y: "+=600",
    })
.fromTo(".Image4", {}, {scrollTrigger: {
    trigger: ".Image4",
    start: "bottom 1%",
    end: "+=150%",
    scrub: true,
    // markers: true,
    pin: false,
    pinSpacing: false,
    toggleActions: "play pause reverse pause"
    }, 
    opacity: 0,
    rotate: 0,
    scale: 5,
    x: "-500",
    y: "+=1200"
    })
    .from("footer", {
        scrollTrigger: {
            trigger: "footer",
            start: "top top",
            end: "center center"
        },
        y: "+=600",
    })
// .fromTo(".Image5", {
//     opacity: 0,
//     scale: 0,
//     x: "+=100"
// }, {scrollTrigger: {
//     trigger: ".space4",
//     start: "80% center",
//     end: "+=50%",
//     scrub: true,
//     // markers: true,
//     toggleActions: "play pause reverse pause"
// }, opacity: 1, scale: 5, x: "-=100"}, "-=1")
// .fromTo(".Image5", {
//     // opacity: 1,
//     // scale: 5,
//     // x: -100
// }, {scrollTrigger: {
//     trigger: ".Image5",
//     start: "center center",
//     end: "+=80%",
//     scrub: true,
//     // markers: true,
//     toggleActions: "play pause reverse pause"
// }, opacity: 0, scale: 15, x: "-="})
