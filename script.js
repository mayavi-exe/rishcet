// Navigation Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(n) {
    if (!slides.length) return;
    
    currentSlide = n;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
}

// Auto advance slides
setInterval(() => {
    if (slides.length) {
        showSlide(currentSlide + 1);
    }
}, 5000);

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form Validation
function validateContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    // Name validation
    if (name.value.trim().length < 2) {
        alert('Please enter a valid name');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone.value)) {
        alert('Please enter a valid phone number');
        isValid = false;
    }
    
    // Message validation
    if (message.value.trim().length < 10) {
        alert('Please enter a message with at least 10 characters');
        isValid = false;
    }
    
    if (isValid) {
        alert('Thank you for your message! We will get back to you soon.');
        event.target.reset();
    }
    
    return false;
}

// Additional JavaScript for Admission Form
function validateAdmissionForm(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const course = document.getElementById('course');
    const percentage = document.getElementById('percentage');
    
    let isValid = true;
    
    // Name validation
    if (fullName.value.trim().length < 2) {
        alert('Please enter your full name');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone.value)) {
        alert('Please enter a valid phone number');
        isValid = false;
    }
    
    // Course validation
    if (course.value === '') {
        alert('Please select a course');
        isValid = false;
    }
    
    // Percentage validation
    const percentageValue = parseFloat(percentage.value);
    if (isNaN(percentageValue) || percentageValue < 0 || percentageValue > 100) {
        alert('Please enter a valid percentage between 0 and 100');
        isValid = false;
    }
    
    if (isValid) {
        alert('Thank you for your application! We will review it and get back to you soon.');
        event.target.reset();
    }
    
    return false;
}