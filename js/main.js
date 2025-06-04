// JavaScript for Day 4 - Education Timeline
document.addEventListener('DOMContentLoaded', function() {
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
});
