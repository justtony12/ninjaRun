const naruto = document.getElementById("naruto");
const shuriken = document.getElementById("shuriken");

function jump(){
    if(naruto.classList != "animate"){
        naruto.classList.add("animate");
    }
    setTimeout(function(){
        naruto.classList.remove("animate");
    }, 500);
}

document.addEventListener("keydown", function(e){
    if (e.code === "Space") {
        jump();
        jumpSound();
    }
})

const checkDead = setInterval(function() {
    const playerTop = parseInt(window.getComputedStyle(naruto).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(shuriken).getPropertyValue("left"));

    if(blockLeft < 150 && blockLeft > 75 && playerTop >= 500){
        shuriken.style.animation = "none";
        clearInterval(timer);
        gameOver();
        pauseMusic();
        deathSound();
    }
}, 10);

const timer = setInterval(gameClock, 1000);
let totalSeconds = 0;

function gameClock(){
    playMusic();
    ++totalSeconds;
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds - hour*3600)/60);
    const seconds = totalSeconds - (hour*3600 + minute*60);

    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}

function restartGame() {
    window.location.reload();
}

function gameOver() {
    let gameOver = document.getElementById("game-over");
    gameOver.style.display = "block";
}

const myMusic = document.getElementById("music");
const myJump = document.getElementById("jumpSound");
const myDeath = document.getElementById("deathMusic");

function playMusic(){
    myMusic.play();
}

function pauseMusic(){
    myMusic.pause();
}

function jumpSound(){
    myJump.play();
}

function deathSound(){
    myDeath.play();
}