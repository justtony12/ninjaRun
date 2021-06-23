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