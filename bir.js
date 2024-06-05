document.getElementById('box').addEventListener('click', function() {
    this.classList.add('clicked');
    this.innerHTML = `
        <p id="message"><strong>Happy Birthday My Love!</strong></p>
        <img id="flowerImage" src="flower.jpg" alt="Flowers" class="show">
    `;
    playBackgroundMusic();
    createHearts();
});

function playBackgroundMusic() {
    var music = document.getElementById('backgroundMusic');
    music.play();
}

function createHearts() {
    setInterval(function() {
        var heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);
        setTimeout(function() {
            heart.remove();
        }, 5000);
    }, 300);
}
