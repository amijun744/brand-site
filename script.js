// 1. Loader Logic
window.addEventListener('load', () => {
    document.querySelector('.progress-fill').style.width = '100%';
    setTimeout(() => {
        document.querySelector('.preloader').style.transform = 'translateY(-100%)';
    }, 1600);
});

// 2. Advanced Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    follower.style.left = e.clientX - 20 + 'px';
    follower.style.top = e.clientY - 20 + 'px';
});

// 3. 3D Tilt Effect
document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${y * -20}deg) rotateY(${x * 20}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
    });
});

// 4. Menu Overlay Toggle
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.menu-close');
const menu = document.querySelector('.menu-overlay');

menuBtn.onclick = () => menu.style.transform = 'translateX(0)';
closeBtn.onclick = () => menu.style.transform = 'translateX(100%)';

// 5. Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));