function setTimer(){
    const days = document.getElementById("daysIn").value;
    const hours = document.getElementById("hoursIn").value;
    const minutes = document.getElementById("minsIn").value;
    const seconds = document.getElementById("secsIn").value;

    var dayInSecs = ((Number(days) * 86400) + (Number(hours) * 3600) + (Number(minutes) * 60) + Number(seconds) );

    var convertedDay =  Math.floor(dayInSecs / 86400);
    var convertedHour = Math.floor((dayInSecs % 86400)/ 3600);
    var convertedMin = Math.floor((dayInSecs % 3600) / 60);
    var convertedSecs = Math.floor( dayInSecs % 60);

    document.getElementById("days").innerHTML = convertedDay;
    document.getElementById("hours").innerHTML= convertedHour;
    document.getElementById("mins").innerHTML = convertedMin;
    document.getElementById("secs").innerHTML = convertedSecs;
    
    document.getElementById("daysIn").value = 0;
    document.getElementById("hoursIn").value = 0;
    document.getElementById("minsIn").value = 0;
    document.getElementById("secsIn").value = 0;
}

function reset(){
    stop();
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("mins").innerHTML = 0;
    document.getElementById("secs").innerHTML = 0;

    document.getElementById("daysIn").value = 0;
    document.getElementById("hoursIn").value = 0;
    document.getElementById("minsIn").value = 0;
    document.getElementById("secsIn").value = 0;
}

var interval;

function start(){

    var days = document.getElementById("days").innerHTML;
    var hours = document.getElementById("hours").innerHTML;
    var minutes = document.getElementById("mins").innerHTML;
    var seconds = document.getElementById("secs").innerHTML; 

    interval = setInterval(display,1000);

    function display(){
        if(seconds>0){
            seconds--;
            document.getElementById("secs").innerHTML = seconds;
        }
        else if(seconds==0 && minutes >0){
            minutes--;
            document.getElementById("mins").innerHTML = minutes;
            seconds = 60;
        }
        else if(seconds == 0 && minutes == 0 && hours >0){
            hours--;
            document.getElementById("hours").innerHTML= hours;
            minutes = 60;
        }
        else if(seconds==0 && minutes==0 && hours==0 && days>0){
            days--;
            document.getElementById("days").innerHTML = days;
            hours = 24;
        }
    }  
}

function stop(){
    clearInterval(interval);
}