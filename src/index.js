import throttle from 'lodash/throttle';

import SegmentedControl from './scripts/segmentedControl';
import WhatIDoCard from './scripts/whatIDoCard';
import WhyICareItem from './scripts/whyICareItem';
import { handleNavClick, handleStickyNav, Section } from './scripts/nav';

import '@/sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    // DOM Selectors
    const menuIcon = document.querySelector('.nav__icon');
    const whatIDoSegmented = document.querySelector('.whatido .segmented-control');
    const whatIDoUX = document.querySelector('.whatido .cardview');
    const whatIDoCode = document.querySelector('.whatido .codeview');
    const whatIDoUXCards = whatIDoUX.querySelectorAll('.card');
    const whyICareItems = document.querySelectorAll('.whyicare__item');
    const nav = document.querySelector('.nav');
    const navMain = nav.querySelector('.nav__main');
    const navItems = nav.querySelectorAll('.nav__list li');
    const navIcon = nav.querySelector('.nav__icon');
    const sections = document.querySelectorAll('body > main div.row:not(.nav)');

    // Event Listeners and Initialization
    menuIcon.addEventListener('click', () => menuIcon.classList.toggle('nav__icon--close'));
    // Make nav sticky when scrolling down
    document.addEventListener(
        'scroll',
        throttle(() => handleStickyNav(nav), 200)
    );
    // Prevent scrolling when mobile nav modal is open
    navMain.addEventListener(
        'touchmove',
        evt => navIcon.classList.contains('nav__icon--close') && evt.preventDefault()
    );
    navMain.addEventListener('click', evt => handleNavClick.call(this, evt, navIcon));
    whatIDoSegmented && whatIDoUX && whatIDoCode && new SegmentedControl(whatIDoSegmented, whatIDoUX, whatIDoCode);
    whatIDoUXCards.forEach(card => new WhatIDoCard(card));
    whyICareItems.forEach(item => new WhyICareItem(item));
    sections.forEach(section => new Section(section, navItems));
});
