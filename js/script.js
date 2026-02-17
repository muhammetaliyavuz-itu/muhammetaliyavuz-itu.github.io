const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { const t = document.querySelector(a.getAttribute('href')); if (t) { e.preventDefault(); window.scrollTo({ top: t.offsetTop - 75, behavior: 'smooth' }) } }));
const els = document.querySelectorAll('.tlc,.pc,.sb,.hs,.edu-card,.cc,.psec,.cdc,.wfi,.ic');
els.forEach(e => e.classList.add('rv'));
const io = new IntersectionObserver((entries) => { entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('vis'), i * 55); io.unobserve(e.target) } }) }, { threshold: .1, rootMargin: '0px 0px -60px 0px' });
els.forEach(e => io.observe(e));

// Modal functionality
function openModal(projectId) {
    const overlay = document.getElementById('modalOverlay');
    const content = document.getElementById('modalContent');
    const template = document.getElementById(projectId + '-template');
    if (template) {
        content.innerHTML = template.innerHTML;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on ESC key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

console.log('%c[MAY] 🚢', 'color:#06b6d4;font-weight:bold');
