const naruto = document.getElementById("naruto");
const shuriken = document.getElementById("shuriken");
const game = document.getElementById("game");

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
        jump()
    }
})

const checkDead = setInterval(function() {
    const playerTop = parseInt(window.getComputedStyle(naruto).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(shuriken).getPropertyValue("left"));

    if(blockLeft < 150 && blockLeft > 75 && playerTop >= 500){
        shuriken.style.animation = "none";
        shuriken.style.display = "none";
        clearInterval(timer);
        gameOver();
    }
}, 10);

const timer = setInterval(gameClock, 1000);
let totalSeconds = 0;

function gameClock(){
    ++totalSeconds;
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds - hour*3600)/60);
    const seconds = totalSeconds - (hour*3600 + minute*60);

    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}




function startGame() {
    let startDiv = document.getElementById("start");
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    gameOver.style.display = "none";
    start();
}

function gameOver() {
    let startDiv = document.getElementById("start");
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    gameOver.style.display = "block";

    game.reset();
    naruto.reset();
    shuriken.reset();
}