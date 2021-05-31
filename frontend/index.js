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