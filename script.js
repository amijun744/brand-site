// 1. Scroll Progress Bar
window.onscroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
};

// 2. Custom Cursor Logic
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, .project-card, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(6)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// 3. Stat Counters
const counters = document.querySelectorAll('.counter');
const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = target / 100;
            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// 4. Intersection Observer for Reveal & Stats
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if(entry.target.classList.contains('stats')) startCounters();
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));