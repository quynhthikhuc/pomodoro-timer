let seconds=displaySeconds="00";
let minutes=displayMinutes="25";
let isPause=false;
let countdown;
let currentMode="pomodoro";

document.getElementById("display-timer").textContent=displayMinutes+":"+displaySeconds;

//Set timer to 5 minutes when "Short break" button is clicked
let pomodoro=document.getElementById("pomodoro");
pomodoro.addEventListener("click", ()=>{
    minutes=displayMinutes="25";
    document.getElementById("display-timer").textContent="25:00";
    currentMode="pomodoro";
    reset()
})

//Set timer to 5 minutes when "Short break" button is clicked
let shortBreak=document.getElementById("short-break");
shortBreak.addEventListener("click", ()=>{
    minutes=displayMinutes="5";
    document.getElementById("display-timer").textContent="05:00";
    currentMode="short-break";
    reset();
})

//Set timer to 15 minutes when "Long break" button is clicked
let longBreak=document.getElementById("long-break");
longBreak.addEventListener("click", ()=>{
    minutes=displayMinutes="15";
    document.getElementById("display-timer").textContent="15:00";
    currentMode="long-break";
    reset()
})

//Start timer
let startButton=document.querySelector("#start-button")
startButton.addEventListener("click", ()=>{
    countdown=setInterval(()=>{
        if(seconds>10){
            seconds--;
            displaySeconds=seconds;
        }
        else if(seconds>0){
            seconds--;
            displaySeconds="0"+seconds;
        }
        else{
            seconds=59;
            displaySeconds=seconds;
            minutes--;
            if(minutes>10){
                displayMinutes=minutes;
            }
            else if(minutes>0){
                displayMinutes="0"+minutes;
            }
            else{
                clearInterval(countdown);
                seconds=0;
                minutes=25;
                document.getElementById("display-timer").textContent="25:00";
            }
        }
        document.getElementById("display-timer").textContent=displayMinutes+":"+displaySeconds;
    },1000)
})

//Reset timer
let resetButton=document.querySelector("#reset-button")
resetButton.addEventListener("click",reset);

function reset(){
    clearInterval(countdown);
    seconds=0;
    if(currentMode === "pomodoro"){
        minutes=25;
        document.getElementById("display-timer").textContent="25:00";
    }
    else if(currentMode === "short-break"){
        minutes=5;
        document.getElementById("display-timer").textContent="05:00";
    }
    else{
        minutes=10;
        document.getElementById("display-timer").textContent="15:00";
    }
}

//Pause timer
let pauseButton=document.querySelector("#pause-button")
pauseButton.addEventListener("click", ()=>{
    clearInterval(countdown);
    document.getElementById("display-timer").textContent=displayMinutes+":"+displaySeconds;
})