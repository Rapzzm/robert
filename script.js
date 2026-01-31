// 1. Typing Effect (Ketik Otomatis)
const textElement = document.getElementById('typing');
const words = ["Web Developer‎ ", "Programmer‎ ", "Tech Enthusiast‎"];
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
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener('DOMContentLoaded', typeEffect);

// 2. Dark Mode Toggle
const toggleSwitch = document.querySelector('.theme-switch-wrapper');
const icon = document.querySelector('#theme-icon');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        icon.classList.replace('bx-sun', 'bx-moon');
    }
}

toggleSwitch.addEventListener('click', function(e) {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.classList.replace('bx-moon', 'bx-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('bx-sun', 'bx-moon');
    }
});

// 3. Hamburger Menu (Mobile)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
});

// 4. SCROLL REVEAL ANIMATION (Muncul saat discroll)
// Pilih elemen yang mau dianimasikan
const revealElements = document.querySelectorAll(
    '.section-title, .about-text, .skill-card, .project-card, .contact-card, .skills-desc'
);

// Tambah class dasar 'reveal'
revealElements.forEach(element => {
    element.classList.add('reveal');
});

// Buat Observer
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Muncul
        } else {
            entry.target.classList.remove('active'); // Hilang (Reset)
        }
    });
}, {
    threshold: 0.15 // Muncul saat 15% elemen terlihat
});

// Mulai pantau
revealElements.forEach(el => scrollObserver.observe(el));
