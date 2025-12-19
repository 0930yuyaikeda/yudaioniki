'use strict';
// header scripts
const hamburgerButton = document.getElementById('hamburger-button');
const closeButton = document.getElementById('close-button');
const mobileNav = document.getElementById('mobile-nav');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

hamburgerButton.addEventListener('click', () => {
    mobileNav.classList.remove('hidden');
    setTimeout(() => {
        mobileNav.classList.remove('opacity-0');
        mobileNav.classList.add('opacity-100');
    }, 500);
});

closeButton.addEventListener('click', () => {
    mobileNav.classList.remove('opacity-100');
    mobileNav.classList.add('opacity-0');
    setTimeout(() => {
        mobileNav.classList.add('hidden');
    }, 500);
});
