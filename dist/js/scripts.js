// MENU TOGGLE
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let nav = selectElement('nav');

menuToggler.addEventListener('click', function () {
    nav.classList.toggle('open');
});

// NAVBAR SCROLLING
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 150;

    header.classList.toggle('scrolling-active', windowPosition);
});

// AOS (Animate On Scroll)
AOS.init({
    disable: false,
    once: true,
    duration: 700,
});




