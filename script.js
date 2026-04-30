// 1. Preloader Close
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').style.transform = 'translateY(-100%)';
    }, 1800);
});

// 2. Menu Logic
const menuTrigger = document.querySelector('.menu-trigger');
const menuClose = document.querySelector('.menu-close');
const overlay = document.querySelector('.menu-overlay');

menuTrigger.onclick = () => overlay.classList.add('active');
menuClose.onclick = () => overlay.classList.remove('active');

// 3. Magnetic Button Effect
const magneticElements = document.querySelectorAll('.magnetic');
magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = `translate(0px, 0px)`;
    });
});

// 4. Grid Glow Follower
document.querySelectorAll('.grid-item').forEach(item => {
    item.onmousemove = (e) => {
        const glow = item.querySelector('.grid-glow');
        const rect = item.getBoundingClientRect();
        glow.style.left = `${e.clientX - rect.left - 50}px`;
        glow.style.top = `${e.clientY - rect.top - 50}px`;
        glow.style.opacity = '0.3';
    };
});

// 5. Native Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = function(e) {
        e.preventDefault();
        overlay.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    };
});