// Intersection Observer for fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -50px 0px'
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.style.opacity = '1';
        });
    }
});

/* === 2. Smooth-scroll + fokusfälla för interna länkar === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const id = this.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }, 400);
        }
    });
});