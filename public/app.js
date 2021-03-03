// console.log('hello world');

// gsap.from('.greetings', {opacity: 0, duration: 3})

let tl = gsap.timeline({defaults: {duration: 2}})

    tl.from(".greetings", {opacity: 0})
    tl.to(".greetings", {opacity: 0})
    tl.from("h2", {opacity: 0})
    tl.to("h2", {opacity: 0})
    tl.from(".background-seq", {opacity: 0, x: 300}, "-=.5")
    tl.from(".seq-2", {opacity: 0, stagger: 0.3, y: -100}, "-=.5")