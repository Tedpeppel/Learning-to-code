const speelveld = document.getElementById("speelveld");
const bal = document.getElementById("vierkant");

const startX = (speelveld.offsetWidth - bal.offsetWidth) /2 ;
const startY = (speelveld.offsetHeight - bal.offsetWidth) /2 ;

let x = startX;
let y = startY;

let speedX = Math.random();
let speedY = Math.random();

const scoreDisplay = document.getElementById("score");
let score = 0;

function updateScore() {
    score ++;
    scoreDisplay.textContent = 'Score ' + score;
    speedX *= 1.1;
    speedY *= 1.1;
}

function updatePosistion() {
    x += speedX;
    y += speedY;



    if (x <= 0 || x >= speelveld.offsetWidth - bal.offsetWidth) {
        speedX = -speedX;
    }

    if (y <= 0 || y >= speelveld.offsetHeight - bal.offsetHeight) {
        speedY = -speedY;
    }

    bal.style.left = x + "px";
    bal.style.top = y + "px";
}
setInterval(updatePosistion,20 );
bal.addEventListener('click', updateScore);