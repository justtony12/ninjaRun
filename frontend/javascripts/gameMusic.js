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