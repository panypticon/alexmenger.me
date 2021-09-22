// Import styles
import '@/sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    // DOM Selectors
    const menuIcon = document.querySelector('.nav__icon');

    // Event Listeners
    menuIcon.addEventListener('click', () => menuIcon.classList.toggle('nav__icon--close'));
});
