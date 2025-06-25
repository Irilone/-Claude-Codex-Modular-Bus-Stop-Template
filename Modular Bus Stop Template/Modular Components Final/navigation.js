/**
 * Navigation and Interactive Components
 * Praktikertjänst Vaccincenter - Bus Stop Template
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMegaMenu();
    initFadeInAnimations();
    initPriceTables();
    initFooterMenu();
    initAccessibility();
});

/**
 * Mega Menu Navigation
 */
function initMegaMenu() {
    const menuButtons = document.querySelectorAll('.navigation__item--has-mega-menu button');
    
    menuButtons.forEach(button => {
        const menuId = button.getAttribute('aria-controls');
        const menu = document.getElementById(menuId);
        
        if (!menu) return;
        
        // Toggle menu on click
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            // Close all other menus
            closeAllMegaMenus();
            
            // Toggle current menu
            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
                menu.removeAttribute('hidden');
                menu.focus();
            }
        });
        
        // Keyboard navigation
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                button.setAttribute('aria-expanded', 'false');
                menu.setAttribute('hidden', '');
                button.focus();
            }
        });
    });
    
    // Close menus when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navigation__item--has-mega-menu')) {
            closeAllMegaMenus();
        }
    });
    
    // Close menus on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllMegaMenus();
        }
    });
}

function closeAllMegaMenus() {
    const menuButtons = document.querySelectorAll('.navigation__item--has-mega-menu button');
    menuButtons.forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        const menuId = button.getAttribute('aria-controls');
        const menu = document.getElementById(menuId);
        if (menu) {
            menu.setAttribute('hidden', '');
        }
    });
}

/**
 * Fade-in Animations
 */
function initFadeInAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Price Table Toggle Enhancement
 */
function initPriceTables() {
    const priceToggles = document.querySelectorAll('.price-toggle-input');
    
    priceToggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            // Update label styles
            const labels = document.querySelectorAll('.price-toggle-label');
            labels.forEach(label => {
                label.classList.remove('active');
            });
            
            const activeLabel = document.querySelector(`label[for="${this.id}"]`);
            if (activeLabel) {
                activeLabel.classList.add('active');
            }
            
            // Announce change to screen readers
            announceToScreenReader(`Prislista ändrad till ${activeLabel?.textContent || 'ordinarie'}`);
        });
    });
}

/**
 * Footer Menu Toggle (Mobile)
 */
function initFooterMenu() {
    const toggleButton = document.getElementById('footer__links-toggle-button');
    const footerLinks = document.getElementById('footer__links');
    
    if (toggleButton && footerLinks) {
        toggleButton.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
            toggleButton.setAttribute('aria-expanded', !isExpanded);
            footerLinks.classList.toggle('open');
        });
    }
}

/**
 * Accessibility Enhancements
 */
function initAccessibility() {
    // Add keyboard navigation for price toggles
    const priceLabels = document.querySelectorAll('.price-toggle-label');
    priceLabels.forEach((label, index) => {
        label.setAttribute('tabindex', '0');
        label.setAttribute('role', 'radio');
        
        label.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                label.click();
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextLabel = priceLabels[index + 1] || priceLabels[0];
                nextLabel.focus();
                nextLabel.click();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevLabel = priceLabels[index - 1] || priceLabels[priceLabels.length - 1];
                prevLabel.focus();
                prevLabel.click();
            }
        });
    });
    
    // Enhance FAQ keyboard navigation
    const faqItems = document.querySelectorAll('.faq-item summary');
    faqItems.forEach((summary, index) => {
        summary.addEventListener('keydown', (e) => {
            const faqSection = summary.closest('.faq-section');
            const allSummaries = faqSection.querySelectorAll('.faq-item summary');
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextSummary = allSummaries[index + 1] || allSummaries[0];
                nextSummary.focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevSummary = allSummaries[index - 1] || allSummaries[allSummaries.length - 1];
                prevSummary.focus();
            }
        });
    });
    
    // Add live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'visually-hidden';
    document.body.appendChild(liveRegion);
}

/**
 * Screen Reader Announcements
 */
function announceToScreenReader(message) {
    const liveRegion = document.querySelector('[role="status"]');
    if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    }
}

/**
 * Smooth Scroll Enhancement
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (!target) return;
        
        e.preventDefault();
        
        // Calculate offset for sticky header
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Focus management for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus();
        
        // Update URL without triggering scroll
        history.pushState(null, null, targetId);
    });
});

/**
 * Image Loading Enhancement
 */
function enhanceImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports lazy loading
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        });
    } else {
        // Fallback for older browsers
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize image loading enhancement
enhanceImageLoading();

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-toggle';
    mobileMenuButton.setAttribute('aria-label', 'Öppna meny');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenuButton.innerHTML = `
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
    `;
    
    const navigation = document.querySelector('.navigation');
    const navigationMenu = document.querySelector('.navigation__left');
    
    if (navigation && navigationMenu && window.innerWidth <= 991) {
        navigation.appendChild(mobileMenuButton);
        
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            navigationMenu.classList.toggle('mobile-menu-open');
            document.body.classList.toggle('menu-open');
            
            // Update aria-label
            mobileMenuButton.setAttribute('aria-label', isExpanded ? 'Öppna meny' : 'Stäng meny');
        });
    }
}

// Initialize mobile menu on load and resize
initMobileMenu();
window.addEventListener('resize', debounce(initMobileMenu, 250));

/**
 * Utility: Debounce Function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}