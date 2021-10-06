import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import SegmentedControl from './scripts/segmentedControl';
import WhatIDoCard from './scripts/whatIDoCard';
import WhyICareItem from './scripts/whyICareItem';

import '@/sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    // DOM Selectors
    const menuIcon = document.querySelector('.nav__icon');
    const whatIDoSegmented = document.querySelector('.whatido .segmented-control');
    const whatIDoUX = document.querySelector('.whatido .cardview');
    const whatIDoCode = document.querySelector('.whatido .codeview');
    const whatIDoUXCards = whatIDoUX.querySelectorAll('.card');
    const whyICareItems = document.querySelectorAll('.whyicare__item');
    const nav = document.querySelector('.nav__main');
    const navIcon = nav.querySelector('.nav__icon');

    // Event Listeners and Initialization
    menuIcon.addEventListener('click', () => menuIcon.classList.toggle('nav__icon--close'));
    // Prevent scrolling when mobile nav modal is open
    nav.addEventListener('touchmove', evt => navIcon.classList.contains('nav__icon--close') && evt.preventDefault());
    whatIDoSegmented && whatIDoUX && whatIDoCode && new SegmentedControl(whatIDoSegmented, whatIDoUX, whatIDoCode);
    whatIDoUXCards.forEach(card => new WhatIDoCard(card));
    whyICareItems.forEach(item => new WhyICareItem(item));
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightAll();
});
