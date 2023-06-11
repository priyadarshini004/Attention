var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var stopsound = document.getElementById('stop-sound');

var h = document.getElementById("hours");
var m = document.getElementById("minutes");
var s = document.getElementById("seconds");

var startTimer = null;
var audio = document.getElementById("ringtone");

stopsound.addEventListener('click',function(){
    audio.pause();
});

start.addEventListener('click', function(){
    if(startTimer === null && (h.value > 0 || m.value > 0 || s.value > 0)){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
        h.disabled = true;
        m.disabled = true;
        s.disabled = true;
    }
});
stop.addEventListener('click',function(){
    clearInterval(startTimer);
    startTimer = null;
    h.disabled = true;
    m.disabled = true;
    s.disabled = true;

    
});

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopInterval();
    h.disabled = false;
    m.disabled = false;
    s.disabled = false;

    
});

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
        stopInterval();
        playAudio();
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
}

function stopInterval() {
    clearInterval(startTimer);
    startTimer = null;
    h.disabled = false;
    m.disabled = false;
    s.disabled = false;
}

function playAudio(){
        audio.play();
}