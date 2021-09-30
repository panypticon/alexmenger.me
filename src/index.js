import SegmentedControl from './scripts/segmented-control';
import Card from './scripts/card';

import '@/sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    // DOM Selectors
    const menuIcon = document.querySelector('.nav__icon');
    const whatIDoSegmented = document.querySelector('.whatido .segmented-control');
    const whatIDoUX = document.querySelector('.whatido .cardview--ux');
    const whatIDoCode = document.querySelector('.whatido .cardview--code');
    const whatIDoUXCards = whatIDoUX.querySelectorAll('.card');

    // Event Listeners and Initialization
    menuIcon.addEventListener('click', () => menuIcon.classList.toggle('nav__icon--close'));
    whatIDoSegmented && whatIDoUX && whatIDoCode && new SegmentedControl(whatIDoSegmented, whatIDoUX, whatIDoCode);
    whatIDoUXCards.forEach(card => new Card(card));
});
