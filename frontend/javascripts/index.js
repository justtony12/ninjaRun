// Basic game mechanics under this line ...

const naruto = document.getElementById("naruto");
const shuriken = document.getElementById("shuriken"); 
const game = document.getElementById("game");

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

    if(blockLeft < 350 && blockLeft > 250 && playerTop >= 500){
        shuriken.classList.remove("attack");
        gameOver();
    }
}, 10);



// Game clock functions under this line ...



const timer = {start: null}
let totalSeconds = 0;

function resetClock(){
    if(totalSeconds > 0){
        totalSeconds = 0;
    }
    timer.start = setInterval(gameClock, 1000);
}

function gameClock(){
    ++totalSeconds;
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds - hour*3600)/60);
    const seconds = totalSeconds - (hour*3600 + minute*60);

    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}


// Start game/ game over and restart functions under this line...


function restartGame() {
    let gameOver = document.getElementById("game-over");
    let startGame = document.getElementById("start-screen");
    pauseDeath();
    blueBird.play();
    if(game.classList = "image"){
        game.classList.remove("image");
        gameOver.style.display = "none";
        startGame.style.display = "block";
    }
    document.getElementById("timer").innerHTML = "0:0:0";
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
    stopMusic();
    playMusic();
    resetClock();
}


// Music stuff is under this line...


const myMusic = document.getElementById("music");
const myJump = document.getElementById("jumpSound");
const myDeath = document.getElementById("deathMusic");
const blueBird = document.getElementById("blueBird");

function startMusic(){
    let startScreen = document.getElementById("game");
    let welcomeScreen = document.getElementById("welcome-screen");
    if(startScreen.style.display = "none"){
        startScreen.style.display = "block";
        welcomeScreen.style.display = "none";
    }
    blueBird.play();
}

function stopMusic(){
    blueBird.pause();
    blueBird.currentTime = 0;
}

function playMusic(){
    myMusic.play();
}

function pauseMusic(){
    myMusic.pause();
    myMusic.currentTime = 0;
}

function jumpSound(){
    myJump.play();
}

function playDeath(){
    myDeath.play();
}

function pauseDeath(){
    myDeath.pause();
    myMusic.currentTime = 0;
}


// API stuff under this line ...
