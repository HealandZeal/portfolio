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

// Prevent scrolling when a video is playing
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.addEventListener("play", function () {
            document.body.style.overflow = "hidden"; // Disable scrolling
            document.documentElement.style.overflow = "hidden";
        });

        video.addEventListener("pause", function () {
            document.body.style.overflow = "auto"; // Re-enable scrolling
            document.documentElement.style.overflow = "auto";
        });

        video.addEventListener("ended", function () {
            document.body.style.overflow = "auto"; // Re-enable scrolling
            document.documentElement.style.overflow = "auto";
        });
    });
});

