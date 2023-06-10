var seconds = 0;
var minutes = 0;
var hours = 0;
var newhours = document.getElementById("hours")
var newminutes = document.getElementById("minutes");
var newseconds = document.getElementById("seconds");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");
var interval;
var click = false;

function timer(){
    seconds++;

    if(seconds<10){
    newseconds.innerHTML = "0"+ seconds;
    }
    else{
    newseconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        newminutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        seconds = 0;
        newseconds.innerHTML = "00";
    }
    if(minutes > 9){
        newminutes.innerHTML = minutes;
    }
    if(minutes  > 59){
        hours++;
        newhours.innerHTML = hours < 10 ? "0"+hours : hours;
        minutes = 0;
        seconds=0;
        newminutes.innerHTML = "00";
        newseconds.innerHTML = "00";
    }
    if(hours > 9){
        newhours.innerHTML = hours;
    }
}

start.addEventListener("click",function() {
    if(!click){
    interval =  setInterval(timer,1000);
    click = true;
    }
});

pause.addEventListener("click",function() {
    clearInterval(interval);
    click = false;
});

reset.addEventListener("click",function(){
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    newseconds.innerHTML = "00";
    newminutes.innerHTML = "00";
    newhours.innerHTML = "00";
    click = false;
});