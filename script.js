// Custom Cursor Movement
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor hover effect for links
document.querySelectorAll('a, .bento-item').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2.5)');
    link.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));