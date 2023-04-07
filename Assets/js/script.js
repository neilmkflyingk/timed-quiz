const startEl = document.getElementById("start");
const timeEl = document.getElementById("time");


const q1 = {
    question: "Which of the following is not a basic data type in JavaScript?",
    optionA: "(A) String",
    optionB: "(B) Number",
    optionC: "(C) Boolean",
    optionD: "(D) Object",
    Answer: optionD
}

const q2 = {
    question: "Which of the following is the correct syntax to declare a variable in JavaScript?",
    optionA: "(A) var variableName = value;",
    optionB: "(B) let variableName = value;",
    optionC: "(C) const variableName = value;",
    optionD: "(D) all of the above",
    Answer: optionD
}

const q3 = {
    question: "Which of the following is the correct syntax to call a function in JavaScript?",
    optionA: "(A) function functionName() { <code> } ",
    optionB: "(B) functionName();",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: optionC
}

const q4 = {
    question: "Which of the following is the correct syntax to create an array in JavaScript?",
    optionA: "(A) var arrayName = [];",
    optionB: "(B) let arrayName = [];",
    optionC: "(C) const arrayName = [];",
    optionD: "(D) all of the above",
    Answer: optionD
}

const q5 = {
    question: "Which of the following is the correct syntax to add an element to an array in JavaScript?",
    optionA: "(A) arrayName.push(element);",
    optionB: "(B) arrayName.unshift(element);",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: optionA
}

const q6 = {
    question: "Which of the following is the correct syntax to remove and return the last element from an array in JavaScript?",
    optionA: "(A) arrayName.pop();",
    optionB: "(B) arrayName.shift();",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: optionA
}

const q7 = {
    question: "Which of the following is the correct syntax to iterate through an array in JavaScript?",
    optionA: "(A) for (var i = 0; i < arrayName.length; i++) {<code>}",
    optionB: "(B) for (let i = 0; i < arrayName.length; i--) {<code>}",
    optionC: "(C) for (const i = 0; i < arrayName; i++) {<code>}",
    optionD: "(D) all of the above",
    Answer: optionA
}

const q8 = {
    question: "Which of the following is the correct syntax to check if an element is present in an array in JavaScript?",
    optionA: "(A) arrayName.indexOf(element) !== -1;",
    optionB: "(B) arrayName.includes(element);",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: optionC
}

const q9 = {
    question: "Which of the following is the correct syntax to convert a string to a number in JavaScript?",
    optionA: "(A) JSON.parse(string);",
    optionB: "(B) parseInt(string);",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: optionB
}

const q10 = {
    question: "Which of the following is the correct syntax to convert a number to a string in JavaScript?",
    optionA: "(A) '' + number;",
    optionB: "(B) String(number);",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: optionD
}










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





