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
    let startGame = document.getElementById("start-screen");
    let lists = document.getElementById("all-lists");
    pauseDeath();
    blueBird.play();
    if(game.classList = "image"){
        game.classList.remove("image");
        startGame.style.display = "block";
        lists.style.display = "none";
    }
    document.getElementById("timer").innerHTML = "0:0:0";
}

function gameOver() {
    let lists = document.getElementById("all-lists");
    if(lists.style.display = "none") {
        lists.style.display = "block"
    }
    clearInterval(timer.start);
    pauseMusic();
    changeBackground();
    playDeath();
    yourList();
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
    myDeath.currentTime = 0;
}


// API stuff under this line ...

document.addEventListener("DOMContentLoaded", () => {
    ListApi.fetchLists()
    PlayerApi.fetchPlayers()
})

const flash = () => document.querySelector("#flash")

function yourList(){
    const submissionForm = document.createElement("form");

    submissionForm.id = "scoreForm"
    
    let level;
    let listId;

    switch(true){
        case(totalSeconds < 60):
            level = "noob"
            listId = 1
            break
        case(totalSeconds < 300):
            level = "wolf"
            listId = 2
            break
        case(totalSeconds < 600):
            level = "tiger"
            listId = 3
            break
        case(totalSeconds < 1800):
            level = "demon"
            listId = 4
            break
        case(totalSeconds < 3600):
            level = "dragon"
            listId = 5
            break
        case(totalSeconds >= 3600):
            level = "god"
            listId = 6
            break
            
    }
   
    submissionForm.innerHTML = `
        <h3>You're a ${level}</h3>
        <label for="player-name">Name:</label>
        <input type="text" name="name" id="player-name"><br>
        <input type="hidden" name="score" id="player-score" value="${totalSeconds}">
        <input type="hidden" name="list" id="list_id" value="${listId}">
        <input type="submit" value="Submit" onclick="restartGame()">
    `
    submissionForm.addEventListener("submit", PlayerApi.handleSubmit)
    document.getElementById("all-lists").append(submissionForm)
}