const player = document.getElementById("player");
const block = document.getElementById("block");

function jump(){
    if(player.classList != "animate"){
        player.classList.add("animate");
    }
    setTimeout(function(){
        player.classList.remove("animate");
    }, 500);
}

document.addEventListener("keydown", function(e){
    if (e.code === "Space") {
        jump()
    }
})

const checkDead = setInterval(function() {
    const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 150 && blockLeft > 75 && playerTop >= 375){
        block.style.animation = "none";
        block.style.display = "none";
        alert("you lose!");
    }
}, 10);