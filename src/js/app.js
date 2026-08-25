//==========================================================
// APP.JS
//==========================================================

const initApplication = () => {

    initStickyNavbar();

    initScrollProgress();

    initBackToTop();

    initSmoothScroll();

    initActiveNavigation();

    initCursor();

    initRevealAnimations();

};

//==========================================================
// STICKY NAVBAR
//==========================================================

function initStickyNavbar() {

    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    const updateNavbar = () => {

        if (window.scrollY > 80) {

            navbar.classList.add('scrolled');

        } else {

            navbar.classList.remove('scrolled');

        }

    };

    updateNavbar();

    window.addEventListener('scroll', updateNavbar);

}

//==========================================================
// SCROLL PROGRESS
//==========================================================

function initScrollProgress() {

    const progress = document.getElementById('progress-bar');

    if (!progress) return;

    const updateProgress = () => {

        const scrollTop =
            window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            (scrollTop / height) * 100;

        progress.style.width =
            percentage + "%";

    };

    updateProgress();

    window.addEventListener(
        'scroll',
        updateProgress
    );

}

//==========================================================
// BACK TO TOP
//==========================================================

function initBackToTop() {

    const button =
        document.getElementById('backToTop');

    if (!button) return;

    window.addEventListener('scroll', () => {

        if (window.scrollY > 500) {

            button.classList.add('show');

        } else {

            button.classList.remove('show');

        }

    });

    button.addEventListener('click', () => {

        window.scrollTo({

            top: 0,

            behavior: 'smooth'

        });

    });

}

//==========================================================
// SMOOTH SCROLL
//==========================================================

function initSmoothScroll() {

    const links =
        document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener('click', event => {

            const target =
                document.querySelector(
                    link.getAttribute('href')
                );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: 'smooth',

                block: 'start'

            });

        });

    });

}

//==========================================================
// ACTIVE NAVIGATION
//==========================================================

function initActiveNavigation() {

    const sections =
        document.querySelectorAll('section');

    const navLinks =
        document.querySelectorAll('.nav-link');

    const updateNavigation = () => {

        let current = "";

        sections.forEach(section => {

            const top =
                section.offsetTop - 120;

            const height =
                section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < top + height
            ) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove('active');

            if (

                link.getAttribute('href') ===
                "#" + current

            ) {

                link.classList.add('active');

            }

        });

    };

    updateNavigation();

    window.addEventListener(
        'scroll',
        updateNavigation
    );

}

//==========================================================
// CUSTOM CURSOR
//==========================================================

function initCursor() {

    const cursor =
        document.getElementById('cursor');

    const blur =
        document.getElementById('cursor-blur');

    if (!cursor || !blur) return;

    document.addEventListener(

        'mousemove',

        event => {

            cursor.style.left =
                event.clientX + "px";

            cursor.style.top =
                event.clientY + "px";

            blur.style.left =
                event.clientX - 160 + "px";

            blur.style.top =
                event.clientY - 160 + "px";

        }

    );

    const hoverItems =
        document.querySelectorAll(

            "a,button,.card,.project-card,.skill-card"

        );

    hoverItems.forEach(item => {

        item.addEventListener(

            'mouseenter',

            () => {

                cursor.style.transform =
                    "scale(2)";

            }

        );

        item.addEventListener(

            'mouseleave',

            () => {

                cursor.style.transform =
                    "scale(1)";

            }

        );

    });

}

//==========================================================
// REVEAL ANIMATION
//==========================================================

function initRevealAnimations() {

    const elements =
        document.querySelectorAll(

            '.reveal,.reveal-left,.reveal-right,.reveal-scale'

        );

    if (!elements.length) return;

    const observer =

        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(

                            'active'

                        );

                    }

                });

            },

            {

                threshold: .15

            }

        );

    elements.forEach(element => {

        observer.observe(element);

    });

}



//==========================================================
// EXPORT
//==========================================================

export default initApplication;