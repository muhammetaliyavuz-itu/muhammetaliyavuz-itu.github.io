const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>60));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();window.scrollTo({top:t.offsetTop-75,behavior:'smooth'})}}));
const els=document.querySelectorAll('.tlc,.pc,.sb,.hs,.edu-card,.cc,.psec,.cdc,.wfi,.ic');
els.forEach(e=>e.classList.add('rv'));
const io=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('vis'),i*55);io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -60px 0px'});
els.forEach(e=>io.observe(e));
console.log('%c[MAY] 🚢','color:#06b6d4;font-weight:bold');
