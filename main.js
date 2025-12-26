// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// Dark/Light mode toggle
const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

const enableDarkMode = () => {
    body.classList.add('dark-mode');
};

const disableDarkMode = () => {
    body.classList.remove('dark-mode');
};

// Check initial state (optional: persist with localStorage if needed)
if (darkModeButton.checked) {
    enableDarkMode();
}

darkModeButton.addEventListener('change', () => {
    if (darkModeButton.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Typed.js for multiple text animation
const typed = new Typed('.multiple', {
    strings: ['Front End Developer', 'Web Designer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});