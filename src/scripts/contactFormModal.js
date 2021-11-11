import { handleCloseModal } from './showcaseModal';

const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target.elements);
    // https://formspree.io/f/mdoyqorn
};

const createModal = () => {
    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal__background', 'can-close');

    const modalBox = document.createElement('article');
    modalBox.classList.add('modal__box', 'fade-in-up');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal__header');

    const modalHeaderHeading = document.createElement('span');
    modalHeaderHeading.classList.add('modal__header-heading');
    modalHeaderHeading.innerText = "Let's Get in Touch";

    const modalHeaderClose = document.createElement('i');
    modalHeaderClose.classList.add('bi', 'bi-x-lg', 'can-close');

    const modalContent = document.createElement('section');
    modalContent.classList.add('modal__content');

    const modalForm = document.createElement('form');
    modalForm.classList.add('modal__form');
    modalForm.addEventListener('submit', handleSubmit);

    modalForm.insertAdjacentHTML(
        'beforeend',
        `
    <div class="input-wrapper">
        <input type="text" id="name" name="name" required>
        <label for="name">Name</label>
    </div>
    <div class="input-wrapper">
        <input type="email" id="email" name="email" required>
        <label for="email">E-mail</label>
    </div>
    <div class="input-wrapper">
        <textarea id="message" name="message" required></textarea>
        <label for="message">Message</label>
    </div>
    <button type="submit" class="btn btn--primary">Send</button>
    `
    );

    modalHeader.appendChild(modalHeaderHeading);
    modalHeader.appendChild(modalHeaderClose);
    modalBox.appendChild(modalHeader);
    modalContent.appendChild(modalForm);
    modalBox.appendChild(modalContent);
    modalBackground.appendChild(modalBox);
    document.body.appendChild(modalBackground);
    modalBackground.addEventListener('click', handleCloseModal);
};

export const handleOpenForm = evt => {
    evt.preventDefault();
    createModal();
    document.body.classList.add('no-scroll');
    window.addEventListener('keyup', handleCloseModal);
};
