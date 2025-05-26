// JavaScript for Day 10 - Final Polish
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });
    
    // Custom cursor
    const cursor = document.querySelector('.cursor-custom');
    const follower = document.querySelector('.cursor-custom-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .social-icon, .bubble, .project-card, .theme-toggle');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseout', function() {
        cursor.style.display = 'none';
        follower.style.display = 'none';
    });
    
    document.addEventListener('mouseover', function() {
        cursor.style.display = 'block';
        follower.style.display = 'block';
    });

    // Particles.js configuration
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#2563eb"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2563eb",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        
        // Update particles color based on theme
        if (body.classList.contains('light-mode')) {
            window.pJSDom[0].pJS.particles.color.value = '#2563eb';
            window.pJSDom[0].pJS.particles.line_linked.color = '#2563eb';
            
            // Refresh particles
            window.pJSDom[0].pJS.fn.particlesRefresh();
            
            // Save theme preference
            localStorage.setItem('theme', 'light');
        } else {
            window.pJSDom[0].pJS.particles.color.value = '#2563eb';
            window.pJSDom[0].pJS.particles.line_linked.color = '#2563eb';
            
            // Refresh particles
            window.pJSDom[0].pJS.fn.particlesRefresh();
            
            // Save theme preference
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        
        // Update particles for light mode
        setTimeout(() => {
            if (window.pJSDom && window.pJSDom[0]) {
                window.pJSDom[0].pJS.particles.color.value = '#2563eb';
                window.pJSDom[0].pJS.particles.line_linked.color = '#2563eb';
                window.pJSDom[0].pJS.fn.particlesRefresh();
            }
        }, 100);
    }

    // Typing effect
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    const textArray = ['Software Developer', 'Java Developer', 'Web Developer', 'ML Enthusiast'];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains('typing')) {
                cursorSpan.classList.add('typing');
            }
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains('typing')) {
                cursorSpan.classList.add('typing');
            }
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNavLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            mobileNavLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = document.querySelectorAll('.nav-toggle .bar');
            if (navToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Navigation active state
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // About section animation
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    
    if (aboutImage && aboutText) {
        aboutImage.style.opacity = '0';
        aboutText.style.opacity = '0';
        
        setTimeout(() => {
            aboutImage.style.transition = 'opacity 1s ease, transform 1s ease';
            aboutText.style.transition = 'opacity 1s ease, transform 1s ease';
            
            aboutImage.style.opacity = '1';
            aboutText.style.opacity = '1';
            
            aboutImage.style.transform = 'translateX(0)';
            aboutText.style.transform = 'translateX(0)';
        }, 500);
    }
    
    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.timeline-dot').style.transform = 'scale(1.2)';
            this.querySelector('.timeline-dot').style.backgroundColor = 'var(--accent-color)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.timeline-dot').style.transform = 'scale(1)';
            this.querySelector('.timeline-dot').style.backgroundColor = 'var(--primary-color)';
        });
    });
    
    // Skills animation
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(level => {
        const value = level.getAttribute('data-level');
        
        setTimeout(() => {
            level.style.width = value + '%';
        }, 500);
    });
    
    // Project card flip animation
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const frontSide = card.querySelector('.project-card-front');
        const backSide = card.querySelector('.project-card-back');
        const flipIcon = card.querySelector('.flip-icon');
        const flipBackIcon = card.querySelector('.flip-back-icon');
        
        if (flipIcon) {
            flipIcon.addEventListener('click', function() {
                card.querySelector('.project-card-inner').style.transform = 'rotateY(180deg)';
            });
        }
        
        if (flipBackIcon) {
            flipBackIcon.addEventListener('click', function(e) {
                e.stopPropagation();
                card.querySelector('.project-card-inner').style.transform = 'rotateY(0deg)';
            });
        }
    });
    
    // Skill bubbles animation
    const skillBubbles = document.querySelectorAll('.bubble');
    
    skillBubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--box-shadow)';
        });
        
        // Random floating animation
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        bubble.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
    });
});
