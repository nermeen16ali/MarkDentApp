const list = document.querySelectorAll('.list');
const navigation = document.querySelector('.navigation');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');

    // Update indicator position variable for the mask
    if (navigation) {
        const rect = this.getBoundingClientRect();
        const navRect = navigation.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2 - navRect.left;
        navigation.style.setProperty('--indicator-x', centerX + 'px');
    }
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));

// Initialize position for the active item on load
window.addEventListener('load', () => {
    const activeItem = document.querySelector('.list.active');
    if (activeItem && navigation) {
        const rect = activeItem.getBoundingClientRect();
        const navRect = navigation.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2 - navRect.left;
        navigation.style.setProperty('--indicator-x', centerX + 'px');
    }
});