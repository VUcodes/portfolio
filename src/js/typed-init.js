//==========================================================
// TYPED-INIT.JS
//==========================================================

const initTyped = () => {

    const element = document.getElementById("typed-text");

    if (!element) return;

    if (typeof Typed === "undefined") {

        console.warn("Typed.js is not loaded.");

        return;

    }

    new Typed("#typed-text", {

        strings: [

            "Senior Software Engineer",

            "Frontend Architect",

            "Angular Expert",

            "JavaScript Developer",

            "TypeScript Developer",

            "React Developer",

            "Vue.js Developer",

            "Enterprise UI Specialist",

            "Performance Optimization Expert",

            "REST API Integrator",

            "Reusable Component Designer",

            "Frontend Engineering Lead",

            "AI Assisted Developer",

            "Modern Web Developer",

            "Problem Solver"

        ],

        typeSpeed: 55,

        backSpeed: 30,

        backDelay: 1800,

        startDelay: 600,

        smartBackspace: true,

        loop: true,

        showCursor: true,

        cursorChar: "|",

        autoInsertCss: true

    });

};

//==========================================================
// OPTIONAL HERO TEXT ANIMATION
//==========================================================

export function animateHeroTitle() {

    const title = document.querySelector(".hero-title");

    if (!title) return;

    if (typeof gsap === "undefined") return;

    gsap.from(title, {

        y: 80,

        opacity: 0,

        duration: 1.2,

        ease: "power3.out"

    });

}

//==========================================================
// OPTIONAL HERO DESCRIPTION
//==========================================================

export function animateHeroDescription() {

    const description = document.querySelector(".hero-description");

    if (!description) return;

    if (typeof gsap === "undefined") return;

    gsap.from(description, {

        y: 40,

        opacity: 0,

        delay: .5,

        duration: 1,

        ease: "power2.out"

    });

}

//==========================================================
// OPTIONAL HERO BUTTONS
//==========================================================

export function animateHeroButtons() {

    const buttons =

        document.querySelector(".hero-buttons");

    if (!buttons) return;

    if (typeof gsap === "undefined") return;

    gsap.from(buttons.children, {

        opacity: 0,

        y: 25,

        duration: .8,

        stagger: .15,

        delay: .9,

        ease: "back.out(1.4)",

        clearProps: "all",

    });

}

//==========================================================
// OPTIONAL HERO IMAGE
//==========================================================

export function animateHeroImage() {

    const image =

        document.querySelector(".hero-image");

    if (!image) return;

    if (typeof gsap === "undefined") return;

    gsap.from(image, {

        opacity: 0,

        scale: .8,

        rotation: -8,

        duration: 1.3,

        ease: "power3.out"

    });

}

//==========================================================
// INITIAL PAGE ANIMATION
//==========================================================

document.addEventListener("DOMContentLoaded", () => {

    animateHeroTitle();

    animateHeroDescription();

    animateHeroButtons();

    animateHeroImage();

});

//==========================================================
// EXPORT
//==========================================================

export default initTyped;