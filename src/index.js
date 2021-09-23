// Import styles
import '@/sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    // DOM Selectors
    const menuIcon = document.querySelector('.nav__icon');
    const whatIDoSegmented = document.querySelector('.whatido .segmented-control');
    const whatIDoSegmentedIndicator = whatIDoSegmented.querySelector('.segmented-control__indicator');

    // Functions
    const handleSegmentedChange = evt => {
        const { location } = evt.target.dataset;
        whatIDoSegmentedIndicator.classList.add(`segmented-control__indicator--${location}`);
        whatIDoSegmentedIndicator.classList.remove(
            `segmented-control__indicator--${location === 'left' ? 'right' : 'left'}`
        );
    };

    // Event Listeners
    menuIcon.addEventListener('click', () => menuIcon.classList.toggle('nav__icon--close'));
    whatIDoSegmented.addEventListener('change', handleSegmentedChange);
});
