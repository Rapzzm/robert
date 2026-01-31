// 1. Typing Effect
const textElement = document.getElementById('typing');
const words = ["Web Developer", "Programmer", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        textElement.textContent = currentWord.substring(0, charIndex++);
    }
    let typeSpeed = isDeleting ? 100 : 200;
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true; typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false; wordIndex = (wordIndex + 1) % words.length; typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener('DOMContentLoaded', typeEffect);

// 2. Dark Mode (Default Dark)
const toggleSwitch = document.querySelector('.theme-switch-wrapper');
const icon = document.querySelector('#theme-icon');
const currentTheme = localStorage.getItem('theme');

// Cek apakah user pernah pilih Light Mode. Jika tidak, tetap Dark.
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    icon.classList.replace('bx-sun', 'bx-moon');
} else {
    // Default Dark Mode
    icon.classList.replace('bx-moon', 'bx-sun');
}

toggleSwitch.addEventListener('click', function(e) {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
        // Balik ke Dark (Default)
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('bx-moon', 'bx-sun');
    } else {
        // Ubah ke Light
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.classList.replace('bx-sun', 'bx-moon');
    }
});

// 3. Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
});

// 4. Scroll Reveal Animation
const revealElements = document.querySelectorAll('.section-title, .about-text, .skill-card, .project-card, .contact-card, .skills-desc');

revealElements.forEach(element => element.classList.add('reveal'));

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => scrollObserver.observe(el));
