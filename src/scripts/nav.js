export const handleNavClick = (evt, navIcon) => {
    evt.preventDefault();
    const { target } = evt.target.dataset;
    if (target) {
        navIcon.classList.remove('nav__icon--close');
        const destination = document.getElementById(target);
        window.scrollTo({
            top: destination.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }
};

export const handleStickyNav = nav => {
    if (window.scrollY >= 350) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};

export class Section {
    constructor(elem, navItems) {
        this.section = elem;
        this.navItems = navItems;
        this.handleIntersectionObserver = this.handleIntersectionObserver.bind(this);
        this.observer = new IntersectionObserver(this.handleIntersectionObserver, {
            rootMargin: '50px 0px 0px 0px',
            threshold: 0.33
        });
        this.observer.observe(this.section);
    }

    handleIntersectionObserver(entry) {
        entry[0].isIntersecting &&
            this.navItems.forEach(item => {
                if (item.children[0].dataset.target === this.section.id) item.classList.add('nav__list--active');
                else item.classList.remove('nav__list--active');
            });
    }
}
