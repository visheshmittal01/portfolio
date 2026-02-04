// --- Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    // Toggle the active class on hamburger and nav-links
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});


// --- Existing Intersection Observer ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add class when element enters viewport
            entry.target.classList.add('active');
            
            // Find ALL progress bars inside this specific revealed section
            const allBars = entry.target.querySelectorAll('.progress');
            allBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });
        } 
        // Note: I removed the "else" block to stop it from resetting every time 
        // (better user experience on mobile), but you can add it back if you want the loop.
    });
}, { 
    threshold: 0.1 
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));