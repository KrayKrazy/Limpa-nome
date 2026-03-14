document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation classes to elements
    const animElements = document.querySelectorAll('.service-card, .benefit-item, .legal-content, .card-icon');
    animElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Custom animation for observer targets
    window.addEventListener('scroll', () => {
        animElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });

    // Mobile menu toggle (simple version)
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.parentElement.style.padding = '10px 0';
            nav.parentElement.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.parentElement.style.padding = '20px 0';
            nav.parentElement.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });

    // WhatsApp Click Tracking (Optional)
    const ctaButtons = document.querySelectorAll('.btn-cta, .btn-cta-large');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('CTA Clicked: ' + btn.textContent.trim());
        });
    });
});
