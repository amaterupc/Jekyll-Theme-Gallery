// Gallery Filtering and Interaction
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Animate hamburger
            const hamburger = this.querySelector('.hamburger');
            if (hamburger) {
                hamburger.style.transform = navMenu.classList.contains('active')
                    ? 'rotate(45deg)'
                    : 'rotate(0)';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!event.target.closest('.navbar')) {
                navMenu.classList.remove('active');
                const hamburger = navToggle.querySelector('.hamburger');
                if (hamburger) {
                    hamburger.style.transform = 'rotate(0)';
                }
            }
        });
    }

    // Theme Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const themeCards = document.querySelectorAll('.theme-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter theme cards
            themeCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect to cards (additional interaction)
    themeCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', function () {
            this.style.zIndex = '1';
        });
    });

    // Lazy loading for images (if browser supports it)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
});

// Add parallax effect to background on scroll
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('body');

    if (parallax) {
        parallax.style.backgroundPositionY = -(scrolled * 0.3) + 'px';
    }
});
