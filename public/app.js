// console.log('hello world');

// gsap.from('.greetings', {opacity: 0, duration: 3})

let tl = gsap.timeline({defaults: {duration: 2}})

    tl.from(".greetings", {opacity: 0})
    tl.to(".greetings", {opacity: 0})
    tl.from("h2", {opacity: 0})