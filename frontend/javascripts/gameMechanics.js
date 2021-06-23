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