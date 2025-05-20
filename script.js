// Portfolio JavaScript file
// Author: Ofir Halbershtat
// Date: May 2025

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Contact form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill out all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Normally, you would send data to your server here
            // For now, we'll just show a success message
            alert('Message sent! This is a placeholder - you need to implement actual form handling.');
            
            // Reset form fields
            contactForm.reset();
        });
    }
    
    // Add active class to navigation links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Track scroll position for highlighting active section in navigation
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Optional: Add section appearance animations
    const revealSections = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add('visible');
            }
        });
    };
    
    // Call on page load and scroll
    revealSections();
    window.addEventListener('scroll', revealSections);
    
    // Optional: Add theme toggle functionality if you want to add a light mode
    // const themeToggle = document.getElementById('theme-toggle');
    // if (themeToggle) {
    //     themeToggle.addEventListener('click', () => {
    //         document.body.classList.toggle('light-mode');
    //     });
    // }
    
    // Add CSS class to body once fonts have loaded to prevent FOUT (Flash of Unstyled Text)
    document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
    });
});