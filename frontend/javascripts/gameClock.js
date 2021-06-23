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