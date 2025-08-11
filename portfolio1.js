 document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.main-nav a');
            const homeLink = document.getElementById('home-nav-link');
            const sections = document.querySelectorAll('section');
            const hero = document.querySelector('.hero');
            const topNav = document.querySelector('.top-nav');
            const homeButton = document.getElementById('home-button');
            const contactHomeButton = document.getElementById('contact-home-button');

            const showSection = (targetId) => {
                hero.style.display = 'none';
                sections.forEach(sec => sec.classList.remove('visible'));
                if (targetId) {
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.classList.add('visible');
                    }
                }
                navLinks.forEach(link => {
                    if (link.getAttribute('data-target') === targetId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            };

            const showHome = () => {
                hero.style.display = 'flex';
                sections.forEach(sec => sec.classList.remove('visible'));
                navLinks.forEach(link => link.classList.remove('active'));
            };

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('data-target');
                    if (targetId === 'contact') {
                        topNav.style.display = 'none';
                    } else {
                        topNav.style.display = 'flex';
                    }
                    showSection(targetId);
                });
            });

            homeLink.addEventListener('click', (e) => {
                e.preventDefault();
                topNav.style.display = 'flex';
                showHome();
            });

            homeButton.addEventListener('click', (e) => {
                e.preventDefault();
                topNav.style.display = 'flex';
                showHome();
            });

            contactHomeButton.addEventListener('click', (e) => {
                e.preventDefault();
                topNav.style.display = 'flex';
                showHome();
            });

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
            typeEffect();
        });