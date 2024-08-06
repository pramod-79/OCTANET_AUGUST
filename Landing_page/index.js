// index.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation and submission
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        const emailInput = document.querySelector('#email-input');
        if (validateEmail(emailInput.value)) {
            alert('Thank you for signing up!');
            emailInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
