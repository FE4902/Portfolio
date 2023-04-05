gsap.registerPlugin(ScrollTrigger);

// INTRO
const animationOptions = {
    ease: "expo.inOut",
};

const introAnimation = () => {
    const tl = gsap.timeline({
        defaults: {
            ease: animationOptions.ease,
            duration: 1,
        },
    });

    tl.to(".intro__title", {
        opacity: 1,
        duration: 1.5,
        y: 0,
        autoAlpha: 1,
        delay: 0.5,
    })
        .to(".intro__background--left, .intro__background--right", {
            scaleX: 1,
        })
        .to(".intro__background--left, .intro__background--right", {
            scaleY: 0,
            transformOrigin: "top center",
        })
        .to(
            ".intro__title",
            {
                duration: 1.5,
                y: -60,
                autoAlpha: 0,
            },
            "-=0.6"
        )
        .to(
            ".intro",
            {
                y: "-100%",
            },
            "-=0.5"
        );

    return tl;
};

const master = gsap.timeline({
    paused: false,
    delay: 0.2,
});

master.add(introAnimation());

// COMPANY
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

// PROJECT
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

// SCROLL
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

// FOOTER
gsap.from(".footer__container", {
    scrollTrigger: {
        trigger: ".footer",
        scrub: 1,
        start: "-50%",
        end: "0",
    },
    yPercent: 10,
    ease: "none",
});

const spans = document.querySelectorAll(".footer__logo span");
const buttons = document.querySelectorAll(".footer__button-link");
const tl = gsap.timeline();

spans.forEach((span, i) => {
    gsap.from(span, {
        scrollTrigger: {
            trigger: ".blog",
            scrub: 1,
            start: `-${20 - i * 3}%`,
            end: `+=${70 + i * 3}%`,
        },
        y: -300,
        ease: "none",
    });
});

buttons.forEach((button, i) => {
    gsap.from(button, {
        scrollTrigger: {
            trigger: ".blog",
            delay: 0.25 * i,
            scrub: 1,
            start: `-${20 - i * 3}%`,
            end: `+=${70 + i * 3}%`,
        },
        y: 50,
        opacity: 1,
        ease: "none",
    });
});
