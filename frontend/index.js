const naruto = document.getElementById("naruto");
const shuriken = document.getElementById("shuriken"); 
const game = document.getElementById("game");

//this is fine for now but shuriken still randomly appears along path.
function setRandomAnimationDuration(){
    shuriken.style.animationDuration = Math.floor(Math.random() * 2 + 1.5) + "s";
}

shuriken.addEventListener("animationiteration", setRandomAnimationDuration);

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

function changeBackground(){
    if(game.classList != "image"){
        game.classList.add("image");
    }
}

const checkDead = setInterval(function() {
    const playerTop = parseInt(window.getComputedStyle(naruto).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(shuriken).getPropertyValue("left"));

    if(blockLeft < 150 && blockLeft > 75 && playerTop >= 500){
        shuriken.classList.remove("attack");
        gameOver();
    }
}, 10);


const timer = {start: null}
let totalSeconds = 0;

function gameClock(){
    ++totalSeconds;
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds - hour*3600)/60);
    const seconds = totalSeconds - (hour*3600 + minute*60);

    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}

function restartGame() {
    window.location.reload(); //find a new way to reset the game without reloading the page.
}

function gameOver() {
    let gameOver = document.getElementById("game-over");
    gameOver.style.display = "block";
    clearInterval(timer.start);
    pauseMusic();
    changeBackground();
    playDeath();
}

function startGame(){
    let startGame = document.getElementById("start-screen");
    if(startGame.style.display = "block"){
        startGame.style.display = "none";
    }
    shuriken.classList.add("attack");
    playMusic();
    timer.start = setInterval(gameClock, 1000);
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

//I probs need to make pause functions for the two below and intergrate them somewhere.

function jumpSound(){
    myJump.play();
}

function playDeath(){
    myDeath.play();
}