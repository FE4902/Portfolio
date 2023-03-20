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
