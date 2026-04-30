// 1. Text Scrambler Engine
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
document.querySelector(".scramble-text").onmouseover = event => {
    let iteration = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) return event.target.dataset.value[index];
                return letters[Math.floor(Math.random() * 36)];
            })
            .join("");
        if(iteration >= event.target.dataset.value.length) clearInterval(interval);
        iteration += 1 / 3;
    }, 30);
};

// 2. Starfield Engine (Canvas)
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function initStars() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < 400; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: Math.random()
        });
    }
}

function updateStars() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    
    stars.forEach(s => {
        s.z -= 2;
        if (s.z <= 0) s.z = canvas.width;
        let sx = (s.x - canvas.width/2) * (canvas.width/s.z) + canvas.width/2;
        let sy = (s.y - canvas.height/2) * (canvas.width/s.z) + canvas.height/2;
        let size = (1 - s.z/canvas.width) * 3;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI*2);
        ctx.fill();
    });
    requestAnimationFrame(updateStars);
}

// 3. System Clock
setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}, 1000);

initStars();
updateStars();

// 4. Cursor Follower
document.addEventListener('mousemove', e => {
    document.querySelector('.cursor-void').style.left = e.clientX - 20 + 'px';
    document.querySelector('.cursor-void').style.top = e.clientY - 20 + 'px';
});