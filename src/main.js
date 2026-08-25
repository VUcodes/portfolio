//==========================================================
// MAIN.JS
//==========================================================

//==========================================================
// CSS IMPORTS
//==========================================================

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '@fortawesome/fontawesome-free/css/all.min.css';

import 'aos/dist/aos.css';

import './css/style.css';
import './css/animations.css';
import './css/responsive.css';

//==========================================================
// JQUERY
//==========================================================

import $ from 'jquery';

window.$ = $;
window.jQuery = $;

//==========================================================
// AOS
//==========================================================

import AOS from 'aos';
import 'aos/dist/aos.css';

//==========================================================
// GSAP
//==========================================================

import { gsap } from 'gsap';

window.gsap = gsap;

//==========================================================
// TYPED JS
//==========================================================

import Typed from 'typed.js';

window.Typed = Typed;


//==========================================================
// APPLICATION MODULES
//==========================================================

import initApplication from './js/app';

import initPortfolio from './js/portfolio';

import initTimeline from './js/timeline';

import initTyped from './js/typed-init';

import initParticles from './js/particles-config';

import initContactForm from "./js/contact-form";

//==========================================================
// WINDOW LOADED
//==========================================================

window.addEventListener('load', () => {

    //--------------------------------------
    // Loader
    //--------------------------------------

    const loader = document.getElementById('loader');

    if (loader) {

        loader.classList.add('loader-hide');

        setTimeout(() => {

            loader.remove();

        }, 700);

    }

});


//==========================================================
// DOM READY
//==========================================================

document.addEventListener('DOMContentLoaded', () => {

    //--------------------------------------
    // Third Party Libraries
    //--------------------------------------

    AOS.init({

        duration: 1000,

        easing: 'ease-in-out',

        once: true,

        mirror: false,

        offset: 100

    });

    //--------------------------------------
    // Initialize Modules
    //--------------------------------------

    initApplication();

    initPortfolio();

    initTimeline();

    initTyped();

    initParticles();

    initContactForm();

});

//==========================================================
// WINDOW RESIZE
//==========================================================

window.addEventListener('resize', () => {

    window.dispatchEvent(

        new Event('portfolio:resize')

    );

});

//==========================================================
// WINDOW SCROLL
//==========================================================

window.addEventListener('scroll', () => {

    window.dispatchEvent(

        new Event('portfolio:scroll')

    );

});

//==========================================================
// EXPORTS
//==========================================================

export {
    $,
    gsap,
    Typed
};