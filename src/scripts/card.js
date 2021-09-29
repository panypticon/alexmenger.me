const handleCardMouseMove = evt => {
    const card = evt.target.closest('.card');
    const cardRect = card.getBoundingClientRect();
    const { left, top, width, height } = cardRect;
    const x = evt.clientX - left;
    const y = evt.clientY - top;
    const widthThreshold = width / 2;
    const heightThreshold = height / 2;
    if (x <= widthThreshold && y <= heightThreshold) {
        card.classList.add('top-left');
        card.classList.remove('top-right', 'bottom-right', 'bottom-left');
    } else if (x > widthThreshold && y <= heightThreshold) {
        card.classList.add('top-right');
        card.classList.remove('bottom-right', 'bottom-left', 'top-left');
    } else if (x <= widthThreshold && y > heightThreshold) {
        card.classList.add('bottom-left');
        card.classList.remove('top-left', 'top-right', 'bottom-right');
    } else if (x > widthThreshold && y > heightThreshold) {
        card.classList.add('bottom-right');
        card.classList.remove('bottom-left', 'top-left', 'top-right');
    }
};

export default handleCardMouseMove;
