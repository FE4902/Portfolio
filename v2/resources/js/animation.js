gsap.registerPlugin(ScrollTrigger);

gsap.from(".company__swipe--after", {
    scrollTrigger: {
        trigger: ".company",
        scrub: 1,
        start: "-70%",
        end: "+=100%",
    },
    clipPath: "inset(100% 0px 0px)",
    ease: "none",
});

const elements = document.querySelectorAll(".project__link");
elements.forEach((element) => {
    const left = (Math.random() - 0.5) * window.innerWidth;
    const top = Math.random() * -(window.innerHeight - element.offsetHeight);

    gsap.from(element, {
        scrollTrigger: {
            trigger: ".project",
            scrub: 1,
            start: "-10%",
            end: "0",
        },
        left: left,
        top: top,
        opacity: 0,
        ease: "none",
    });
});

gsap.to(".scroll__line--top", {
    scrollTrigger: {
        trigger: ".project",
        scrub: 1,
        start: "50%",
        end: "+=100%",
    },
    x: -window.innerWidth,
    ease: "none",
});

gsap.from(".scroll__line--bottom", {
    scrollTrigger: {
        trigger: ".project",
        scrub: 1,
        start: "50%",
        end: "+=100%",
    },
    x: -window.innerWidth,
    ease: "none",
});
