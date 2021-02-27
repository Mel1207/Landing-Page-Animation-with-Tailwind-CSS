// console.log('hello world');

// gsap.from('.greetings', {opacity: 0, duration: 3})

let tl = gsap.timeline({defaults: {duration: 2.5}})

    tl.from(".greetings", {opacity: 0})
    tl.to(".greetings", {display: "none"}, "-=2")