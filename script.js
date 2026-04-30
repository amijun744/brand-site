const cursor = document.querySelector('.cursor');

// Smooth Cursor movement
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX - 7}px, ${e.clientY - 7}px, 0)`;
});

// Cursor Interactions
document.querySelectorAll('a, .bento-item, .btn').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform += ' scale(4)';
        cursor.style.background = 'white';
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(4)', ' scale(1)');
        cursor.style.background = 'var(--accent)';
    });
});

// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero Parallax effect
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    document.querySelector('.hero-content').style.transform = `translate(${moveX}px, ${moveY}px)`;
});