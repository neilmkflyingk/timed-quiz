const startEl = document.getElementById("start");
const timeEl = document.getElementById("time");

var questions = [];
var answerOptions = [];
var correctAnswer = [];





function renderQuestion(){

}

function renderOptions() {

}

function correctChoice() {

}

function wrongChoice() {

}

function startTimer() {

}

function scoreTracker() {

}

function checkAnswer() {

}


// called when page loads for highscores from local storage
function init() {
    getscores();
}



// starts/ends timer (calls first question) 
function startquiz() {
    startEl.disabled = true
    var timeLeft = 200;
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeEl.textContent = timeLeft;
            timeLeft--;
        } else {
        timeEl.textContent = "---";
        clearInterval(timeInterval);
        confirm("You are out of time");
        // Actions once time is out
        }    
    }, 1000);
}  

init();

startEl.addEventListener("click", startquiz) 




