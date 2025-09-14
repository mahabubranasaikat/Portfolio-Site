 document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.main-nav a');
            const homeLink = document.getElementById('home-nav-link');
            const sections = document.querySelectorAll('section');
            const hero = document.querySelector('.hero');
            const topNav = document.querySelector('.top-nav');
            const homeButton = document.getElementById('home-button');


            const scrollToSection = (targetId) => {
                if (targetId) {
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    // Scroll to top for home
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                navLinks.forEach(link => {
                    if (link.getAttribute('data-target') === targetId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            };

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('data-target');
                    scrollToSection(targetId);
                });
            });

            if (homeLink) {
                homeLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    scrollToSection(null);
                });
            }

            if (homeButton) {
                homeButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    scrollToSection(null);
                });
            }



            const words = [
                "Software Engineering Student",
                "Tech Enthusiast",
                "Future Developer"
            ];
            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            const typedText = document.getElementById("typed-text");

            function typeEffect() {
                if (!typedText) return;
                const currentWord = words[wordIndex];
                const currentChars = currentWord.substring(0, charIndex);
                typedText.textContent = currentChars;

                if (!isDeleting && charIndex < currentWord.length) {
                    charIndex++;
                    setTimeout(typeEffect, 100);
                }
                else if (isDeleting && charIndex > 0) {
                    charIndex--;
                    setTimeout(typeEffect, 50);
                }
                else {
                    if (!isDeleting) {
                        isDeleting = true;
                        setTimeout(typeEffect, 1000);
                    } else {
                        isDeleting = false;
                        wordIndex = (wordIndex + 1) % words.length;
                        setTimeout(typeEffect, 200);
                    }
                }
            }
            if (typedText) typeEffect();

            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenuBtn.classList.toggle('menu-open');
                    document.querySelector('.main-nav').classList.toggle('active');
                });
            }

            // Dark mode toggle
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                const currentTheme = localStorage.getItem('theme') || 'light';
                document.body.setAttribute('data-theme', currentTheme);
                themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

                themeToggle.addEventListener('click', () => {
                    const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                    document.body.setAttribute('data-theme', newTheme);
                    localStorage.setItem('theme', newTheme);
                    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
                });
            }

            // Animate skills on scroll
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const fills = entry.target.querySelectorAll('.progress-fill');
                            fills.forEach(fill => {
                                fill.style.width = fill.getAttribute('data-width');
                            });
                        }
                    });
                }, { threshold: 0.5 });
                observer.observe(skillsSection);
            }
        });