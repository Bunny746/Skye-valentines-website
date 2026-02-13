// Create floating Pusheen elements
const pusheenImages = [
    'images/pusheen-cookie.gif',
    'images/pusheen-love.gif',
    'images/pusheen-happy.png',
    'images/pusheen-heart.png'
];

function createFloatingElements() {
    const container = document.getElementById('floating-container');
    
    for (let i = 0; i < 15; i++) {
        const el = document.createElement('div');
        el.className = 'float-item';
        const img = document.createElement('img');
        img.src = pusheenImages[Math.floor(Math.random() * pusheenImages.length)];
        el.appendChild(img);
        el.style.left = Math.random() * 100 + '%';
        el.style.animationDuration = (Math.random() * 5 + 10) + 's';
        el.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(el);
    }
}

// Yes button - go to happy page
document.getElementById('yesBtn').addEventListener('click', function() {
    // Celebration effect before leaving
    this.style.transform = 'scale(1.3) rotate(-5deg)';
    this.style.boxShadow = '0 0 60px rgba(255, 143, 171, 0.9)';
    
    setTimeout(() => {
        window.location.href = 'yes.html';
    }, 500);
});

// No button - go to sad page
document.getElementById('noBtn').addEventListener('click', function() {
    this.style.transform = 'scale(0.9)';
    setTimeout(() => {
        window.location.href = 'no.html';
    }, 300);
});

// Initialize
createFloatingElements();