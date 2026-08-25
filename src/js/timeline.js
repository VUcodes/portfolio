//==========================================================
// TIMELINE.JS
//==========================================================

const initTimeline = () => {

    initTimelineAnimation();

    initTimelineProgress();

    initTimelineHover();

};

//==========================================================
// TIMELINE REVEAL
//==========================================================

function initTimelineAnimation() {

    const timelineItems =

        document.querySelectorAll(

            ".timeline-item"

        );

    if (!timelineItems.length) return;

    const observer =

        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },

            {

                threshold: .25

            }

        );

    timelineItems.forEach(item => {

        observer.observe(item);

    });

}

//==========================================================
// TIMELINE PROGRESS
//==========================================================

function initTimelineProgress() {

    const timeline =

        document.querySelector(".timeline");

    if (!timeline) return;

    let progressLine =

        document.querySelector(

            ".timeline-progress"

        );

    if (!progressLine) {

        progressLine =

            document.createElement("div");

        progressLine.className =

            "timeline-progress";

        timeline.appendChild(progressLine);

    }

    const updateProgress = () => {

        const rect =

            timeline.getBoundingClientRect();

        const start =

            window.innerHeight * 0.3;

        let progress =

            start - rect.top;

        progress = Math.max(progress, 0);

        progress = Math.min(progress, rect.height);

        progressLine.style.height = `${Math.min(progress, rect.height)}px`;

    };

    updateProgress();

    window.addEventListener(

        "scroll",

        updateProgress

    );

    window.addEventListener(

        "resize",

        updateProgress

    );

}

//==========================================================
// HOVER EFFECT
//==========================================================

function initTimelineHover() {

    const cards =

        document.querySelectorAll(

            ".timeline-content"

        );

    cards.forEach(card => {

        card.addEventListener(

            "mouseenter",

            () => {

                card.style.transform =

                    "translateY(-8px) scale(1.01)";

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
// TIMELINE DOT ANIMATION
//==========================================================

function animateDots() {

    const dots =

        document.querySelectorAll(

            ".timeline-dot"

        );

    dots.forEach((dot, index) => {

        dot.style.animationDelay =

            `${index * 0.2}s`;

    });

}

//==========================================================
// TIMELINE TAG ANIMATION
//==========================================================

function animateTags() {

    const tags =

        document.querySelectorAll(

            ".timeline-tags span"

        );

    tags.forEach(tag => {

        tag.addEventListener(

            "mouseenter",

            () => {

                tag.style.transform =

                    "translateY(-4px)";

            }

        );

        tag.addEventListener(

            "mouseleave",

            () => {

                tag.style.transform =

                    "";

            }

        );

    });

}

//==========================================================
// INIT EXTRA EFFECTS
//==========================================================

document.addEventListener(

    "DOMContentLoaded",

    () => {

        animateDots();

        animateTags();

    }

);

//==========================================================
// EXPORT
//==========================================================

export default initTimeline;
