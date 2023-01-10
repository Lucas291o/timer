hours=0;
minutes=0;
seconds=0;

function plusHours(){
    hours++
    if (hours > 23) {
        hours=0
    }

    document.getElementById("hours").textContent =fillUpZero(hours)
}

function minusHours(){
    hours--
    if (hours < 0) {
        hours=23
    }

    document.getElementById("hours").textContent=fillUpZero(hours);
}

function plusMinutes(){
    minutes++
    if (minutes > 59) {
        plusHours()
        minutes=0
    }



    document.getElementById("minutes").textContent=fillUpZero(minutes);
}

function minusMinutes(){
    minutes--
    if (minutes < 0) {
        minusHours()
        minutes=59
    }



    document.getElementById("minutes").textContent=fillUpZero(minutes);
}

function plusSeconds(){
    seconds++
if (seconds > 59) {
    plusMinutes();
        seconds=0
    }


    

    

    document.getElementById("seconds").textContent=fillUpZero(seconds);
}



function minusSeconds(){
    seconds--
    if (seconds < 0) {
        minusMinutes()
        seconds=59
    }



    document.getElementById("seconds").textContent=fillUpZero(seconds);
}

function start(){
    intervalId=setInterval(tick, 1000);
}

function tick(){
    minusSeconds()
    if (seconds == 0 && minutes == 0 && hours == 0){
        clearInterval(intervalId); 
        beep(2,660)
    }
    if (seconds == 10 && minutes == 0 && hours == 0){
        beep(0.5,440)
    }
}
const context = new AudioContext();
function beep(l,f){
    const osc=context.createOscillator();
    const gainNode = context.createGain();
    gainNode.connect(context.destination);
    gainNode.gain.value=1*l;
    osc.connect(gainNode);
    osc.frequency.value=f
    gainNode.gain.setValueAtTime(0, context.currentTime + 1)
    osc.start()
}
function fillUpZero(num) {
    if (num < 10){
        t="0"+num
    } else{
        t=num
    }
    return t
}
