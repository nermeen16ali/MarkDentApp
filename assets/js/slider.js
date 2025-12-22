document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.getElementById('hallScrollContainer');
    const leftBtn = document.getElementById('scrollLeftBtn');
    const rightBtn = document.getElementById('scrollRightBtn');

    if (scrollContainer && leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -200, // Amount to scroll left
                behavior: 'smooth'
            });
        });

        rightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: 200, // Amount to scroll right
                behavior: 'smooth'
            });
        });
    }
});