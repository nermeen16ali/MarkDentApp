// const list = document.querySelectorAll('.list');

// function activeLink() {
//     list.forEach((item) =>
//         item.classList.remove('active'));
//     this.classList.add('active');
// }

// list.forEach((item) =>
//     item.addEventListener('click', activeLink));


const items = document.querySelectorAll('.list');

// create ONE indicator
const indicator = document.createElement('span');
indicator.className = 'indicator';

// append to initial active item
const activeItem = document.querySelector('.list.active');
if (activeItem) activeItem.appendChild(indicator);

// click handling
items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(li => li.classList.remove('active'));
        item.classList.add('active');

        // move indicator
        item.appendChild(indicator);
    });
});
