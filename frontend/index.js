const naruto = document.getElementById("naruto");
const shuriken = document.getElementById("shuriken"); 

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

const checkDead = setInterval(function() {
    const playerTop = parseInt(window.getComputedStyle(naruto).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(shuriken).getPropertyValue("left"));

    if(blockLeft < 150 && blockLeft > 75 && playerTop >= 500){
        shuriken.style.animation = "none";
        clearInterval(timer.action);
        pauseMusic();
        gameOver();
    }
}, 10);


const timer = {action: null}
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
    deathSound();
}

function startGame(){
    let startGame = document.getElementById("start-screen");
    startGame.style.display = "none";
    if(shuriken.classList != "attack"){
        shuriken.classList.add("attack");
    }
    playMusic();
    timer.action = setInterval(gameClock, 1000);
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

function deathSound(){
    myDeath.play();
}