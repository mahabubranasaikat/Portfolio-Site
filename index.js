/* ============================================
   Modern Portfolio JavaScript
   ============================================ */

// Theme Management
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const theme = body.getAttribute('data-theme');
    themeToggle.innerHTML = theme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

// Mobile Menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll & Active Navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Progress Bar
const createScrollProgress = () => {
    const scrollProgress = document.createElement('div');
    scrollProgress.style.cssText = `
        position: fixed;
        top: 70px;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #08b6f9);
        z-index: 999;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
        const scrollPercentage = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = scrollPercentage + '%';
    });
};

createScrollProgress();

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe animated elements
document.querySelectorAll('.section-header, .about-card, .stat-card, .skill-category, .project-card, .timeline-item, .achievement-card').forEach(el => {
    observer.observe(el);
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Mailto link
        const mailtoLink = `mailto:mahabubranasaikat@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        
        window.location.href = mailtoLink;
        
        // Reset form
        contactForm.reset();
    });
}

// Typing Effect (Hero Section)
const typedText = document.getElementById('typed-text');
const typingTexts = [
    'Full-Stack Developer',
    'Competitive Programmer',
    'Problem Solver',
    'Tech Enthusiast'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 2000;

function type() {
    const currentText = typingTexts[textIndex];

    if (!isDeleting) {
        // Typing
        if (charIndex < currentText.length) {
            typedText.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            // Pause before deleting
            isDeleting = true;
            setTimeout(type, pauseTime);
        }
    } else {
        // Deleting
        if (charIndex > 0) {
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, deletingSpeed);
        } else {
            // Move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            setTimeout(type, 500);
        }
    }
}

if (typedText) {
    setTimeout(type, 1000);
}

// Smooth Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

body.style.opacity = '0';
body.style.transition = 'opacity 0.5s ease';

// Parallax Effect for Hero
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Skill Progress Animation
const skillProgressBars = document.querySelectorAll('.skill-progress');
const skillSection = document.querySelector('.skills');

if (skillSection) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.skill-progress').forEach(bar => {
                    const width = bar.parentElement.getAttribute('data-width') || bar.style.width;
                    bar.style.animation = `fillProgress 1.2s ease forwards`;
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillObserver.observe(skillSection);
}

// Page Visibility Detection
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '👋 Come back soon!';
    } else {
        document.title = 'Md Mahabub Rana Saikat | Full-Stack Developer';
    }
});

// Network Status
window.addEventListener('online', () => {
    console.log('Back online!');
});

window.addEventListener('offline', () => {
    console.log('You are offline');
});

// Prevent body scroll when menu is open
function toggleBodyScroll(disable) {
    if (disable) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

mobileMenuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('active');
    toggleBodyScroll(isOpen);
});

// Lazy Load Images
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-lazy]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-lazy');
                img.removeAttribute('data-lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }

    // Scroll to top on Home key
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Console Message
console.log('%cWelcome to Md Mahabub Rana Saikat\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cIf you\'re interested in collaborating, feel free to reach out!', 'color: #08b6f9; font-size: 14px;');
