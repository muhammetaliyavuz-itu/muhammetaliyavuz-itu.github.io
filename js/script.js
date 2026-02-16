// ====================================
// Smooth Scroll Navigation
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ====================================
// Navbar Scroll Effect
// ====================================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ====================================
// Active Navigation Highlighting
// ====================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
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
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ====================================
// Intersection Observer for Animations
// ====================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger counter animation for stats
            if (entry.target.classList.contains('stat-card')) {
                animateCounter(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.timeline-item, .project-card, .stat-card').forEach(el => {
    observer.observe(el);
});

// ====================================
// Counter Animation for Stats
// ====================================
function animateCounter(statCard) {
    const numberElement = statCard.querySelector('.stat-number');
    if (!numberElement || numberElement.dataset.animated) return;
    
    const target = parseFloat(numberElement.dataset.value);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const isDecimal = target % 1 !== 0;
    const hasPlus = numberElement.textContent.includes('+');
    const hasPercent = numberElement.textContent.includes('%');

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            let finalText = isDecimal ? target.toFixed(2) : target.toString();
            if (hasPlus) finalText += '+';
            if (hasPercent) finalText += '%';
            numberElement.textContent = finalText;
            clearInterval(timer);
        } else {
            numberElement.textContent = isDecimal ? current.toFixed(2) : Math.floor(current).toString();
        }
    }, 16);
    
    numberElement.dataset.animated = 'true';
}

// ====================================
// Parallax Effect for Grid Background
// ====================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const gridOverlay = document.querySelector('.grid-overlay');
    
    if (gridOverlay && scrolled < window.innerHeight) {
        gridOverlay.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ====================================
// Dynamic Cursor (Desktop Only)
// ====================================
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #06b6d4;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.2s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorDot.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: #06b6d4;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
        
        cursorDot.style.left = mouseX - 4 + 'px';
        cursorDot.style.top = mouseY - 4 + 'px';
    });

    function animate() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        
        requestAnimationFrame(animate);
    }
    animate();

    // Scale cursor on hover
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-tag');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// ====================================
// Typing Effect for Hero Subtitle
// ====================================
const roles = document.querySelectorAll('.role');
roles.forEach((role, index) => {
    const text = role.textContent;
    role.textContent = '';
    role.style.opacity = '0';
    
    setTimeout(() => {
        role.style.opacity = '1';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                role.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        typeWriter();
    }, 1500 + (index * 300));
});

// ====================================
// Project Card Tilt Effect (Desktop Only)
// ====================================
if (window.innerWidth > 768) {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ====================================
// Skill Tag Animation on Hover
// ====================================
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ====================================
// Add Gradient Animation to Hero Title
// ====================================
const highlightText = document.querySelector('.title-line.highlight');
if (highlightText) {
    let hue = 180;
    setInterval(() => {
        hue = (hue + 1) % 360;
        highlightText.style.backgroundImage = `linear-gradient(135deg, hsl(${hue}, 70%, 50%) 0%, hsl(${hue + 60}, 70%, 50%) 100%)`;
    }, 50);
}

// ====================================
// Smooth Reveal on Page Load
// ====================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ====================================
// Add Ripple Effect to Buttons
// ====================================
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ====================================
// Debug Console Message
// ====================================
console.log('%c🚢 Portfolio Loaded Successfully!', 'color: #06b6d4; font-size: 16px; font-weight: bold;');
console.log('%cMuhammet Ali Yavuz - Naval Architecture Engineer', 'color: #94a3b8; font-size: 12px;');
console.log('%cWebsite built with vanilla HTML, CSS & JavaScript', 'color: #64748b; font-size: 10px;');

// ====================================
// Performance Monitoring (Optional)
// ====================================
if (window.performance) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }, 0);
    });
}

// ====================================
// Easter Egg - Konami Code
// ====================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'rainbow 5s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        console.log('%c🎉 KONAMI CODE ACTIVATED! 🎉', 'color: #f97316; font-size: 20px; font-weight: bold;');
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);
