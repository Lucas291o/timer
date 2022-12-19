hours=0;
minutes=0;
seconds=0;

function plusHours(){
    hours++
    if (hours > 23) {
        hours=0
    }

    if (hours < 10){
        t="0"+hours
    } else{
        t=hours
    }

    document.getElementById("hours").textContent = t
}

function minusHours(){
    hours--
    if (hours < 0) {
        hours=23
    }

    if (hours < 10){
        t="0"+hours
    } else{
        t=hours
    }
    document.getElementById("hours").textContent=t;
}

function plusMinutes(){
    minutes++
    if (minutes > 59) {
        plusHours()
        minutes=0
    }

    if (minutes < 10){
        t="0"+minutes
    } else{
        t=minutes
    }

    document.getElementById("minutes").textContent=t;
}

function minusMinutes(){
    minutes--
    if (minutes < 0) {
        minusHours()
        minutes=59
    }

    if (minutes < 10){
        t="0"+minutes
    } else{
        t=minutes
    }

    document.getElementById("minutes").textContent=t;
}

function plusSeconds(){
    seconds++
if (seconds > 59) {
    plusMinutes();
        seconds=0
    }

    if (seconds < 10){
        t="0"+seconds
    } else{
        t=seconds
    }
    

    

    document.getElementById("seconds").textContent=t;
}



function minusSeconds(){
    seconds--
    if (seconds < 0) {
        minusMinutes()
        seconds=59
    }

    if (seconds < 10){
        t="0"+seconds
    } else{
        t=seconds
    }

    document.getElementById("seconds").textContent=t;
}

function start(){
    intervalId=setInterval(tick, 1000);
}

function tick(){
    minusSeconds()
    if (seconds == 0 && minutes == 0 && hours == 0){
        clearInterval(intervalId); 
        beep()
    }
}
const context = new AudioContext();
function beep(){
    const osc=context.createOscillator();
    const gainNode = context.createGain();
    gainNode.connect(context.destination);
    gainNode.gain.value=1;
    osc.connect(gainNode);
    osc.frequency.value=440
    gainNode.gain.setValueAtTime(0, context.currentTime + 1)
    osc.start()
}
