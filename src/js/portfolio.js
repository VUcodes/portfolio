//==========================================================
// PORTFOLIO.JS
//==========================================================

const initPortfolio = () => {

    initCounters();

    initSkillProgress();

    initProjectCards();

    initParallax();

    initSectionAnimations();

    initTiltEffect();

};

//==========================================================
// COUNTER ANIMATION
//==========================================================

function initCounters() {

    const counters =
        document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const counter = entry.target;

                    const value =
                        counter.innerText.replace(/\D/g, "");

                    const target =
                        Number(value);

                    if (!target) return;

                    let current = 0;

                    const increment =
                        Math.ceil(target / 80);

                    const timer =
                        setInterval(() => {

                            current += increment;

                            if (current >= target) {

                                current = target;

                                clearInterval(timer);

                            }

                            if (counter.innerText.includes("%")) {

                                counter.innerText = current + "%";

                            }

                            else if (counter.innerText.includes("+")) {

                                counter.innerText = current + "+";

                            }

                            else {

                                counter.innerText = current;

                            }

                        }, 25);

                    counter.classList.add("animate");

                    observer.unobserve(counter);

                });

            },

            {

                threshold: .5

            }

        );

    counters.forEach(counter => {

        observer.observe(counter);

    });

}

//==========================================================
// SKILL PROGRESS
//==========================================================

function initSkillProgress() {

    const progressBars =
        document.querySelectorAll(".progress-bar");

    if (!progressBars.length) return;

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const progress =
                        entry.target;

                    const width =
                        progress.dataset.width || "0";

                    progress.style.width = width;

                    observer.unobserve(progress);

                });

            },

            {

                threshold: .4

            }

        );

    progressBars.forEach(progress => {

        observer.observe(progress);

    });

}

//==========================================================
// PROJECT CARDS
//==========================================================

function initProjectCards() {

    const cards =
        document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener(

            "mousemove",

            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const rotateY =
                    ((x / rect.width) - .5) * 10;

                const rotateX =
                    -((y / rect.height) - .5) * 10;

                card.style.transform =

                    `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)
                    `;

            }

        );

        card.addEventListener(

            "mouseleave",

            () => {

                card.style.transform = "";

            }

        );

    });

}

//==========================================================
// HERO PARALLAX
//==========================================================

function initParallax() {

    const hero =
        document.querySelector(".hero-image");

    if (!hero) return;

    window.addEventListener(

        "mousemove",

        event => {

            const x =
                (event.clientX / window.innerWidth - .5) * 20;

            const y =
                (event.clientY / window.innerHeight - .5) * 20;

            hero.style.transform =

                `translate(${x}px,${y}px)`;

        }

    );

}

//==========================================================
// SECTION ANIMATIONS
//==========================================================

function initSectionAnimations() {

    const sections =
        document.querySelectorAll("section");

    const observer =

        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(

                            "animate"

                        );

                    }

                });

            },

            {

                threshold: .15

            }

        );

    sections.forEach(section => {

        observer.observe(section);

    });

}

//==========================================================
// SIMPLE TILT EFFECT
//==========================================================

function initTiltEffect() {

    const cards = document.querySelectorAll(

        ".skill-card,.service-card,.architecture-card,.highlight-card"

    );

    cards.forEach(card => {

        card.addEventListener(

            "mousemove",

            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const rotateX =
                    -((y / rect.height) - .5) * 8;

                const rotateY =
                    ((x / rect.width) - .5) * 8;

                card.style.transform =

                    `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)
                    `;

            }

        );

        card.addEventListener(

            "mouseleave",

            () => {

                card.style.transform = "";

            }

        );

    });

}

//==========================================================
// EXPORT
//==========================================================

export default initPortfolio;