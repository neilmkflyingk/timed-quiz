// start button
const startEl = document.getElementById("start");
// time left number
const timeEl = document.getElementById("time");
// question text
const questionEl = document.getElementById("question");
// answer optons
const option1El = document.getElementById("A");
const option2El = document.getElementById("B");
const option3El = document.getElementById("C");
const option4El = document.getElementById("D");
// game instruction text
const instructions = document.querySelector(".card-header");
// contains question and answer options
const queContainerEl = document.querySelector(".question-container");
// text containing right or wrong feedback
const feedbackEl = document.querySelector("#feedback");
// shows score in save window at end
const finalScoreEl = document.querySelector("#finalScore");
// save score window
const overlaySave = document.querySelector("#saveScore");
// high scores window
const overlayScores = document.querySelector("#highScores");
// contains save score and high score windows
const overlayContainer = document.querySelector(".container");
// save score button
const saveBttn = document.querySelector("#saveBttn");
// stores initials input by user
const input = document.querySelector("#initials");
// view high scores 'link'
const viewHighScoresEl = document.querySelector("#scores");
// list containing high scores
const scoresList = document.querySelector("#scoresList");

// question objects containing questions, options, and correct answer
const q1 = {
    question: "Which of the following is not a primitive data type in JavaScript?",
    optionA: "(A) String",
    optionB: "(B) Number",
    optionC: "(C) Boolean",
    optionD: "(D) Object",
    Answer: "D"
}
const q2 = {
    question: "Which of the following is the correct syntax to declare a variable in JavaScript?",
    optionA: "(A) var variableName = value;",
    optionB: "(B) let variableName = value;",
    optionC: "(C) const variableName = value;",
    optionD: "(D) all of the above",
    Answer: "D"
}
const q3 = {
    question: "Which of the following is the correct syntax to call a function in JavaScript?",
    optionA: "(A) function functionName() { <code> } ",
    optionB: "(B) functionName();",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: "B"
}
const q4 = {
    question: "Which of the following is the correct syntax to create an array in JavaScript?",
    optionA: "(A) var arrayName = [];",
    optionB: "(B) let arrayName = [];",
    optionC: "(C) const arrayName = [];",
    optionD: "(D) all of the above",
    Answer: "D"
}
const q5 = {
    question: "Which of the following is the correct syntax to add an element to an array in JavaScript?",
    optionA: "(A) arrayName.push(element);",
    optionB: "(B) arrayName.unshift(element);",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: "A"
}
const q6 = {
    question: "Which of the following is the correct syntax to remove and return the last element from an array in JavaScript?",
    optionA: "(A) arrayName.pop();",
    optionB: "(B) arrayName.shift();",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: "A"
}
const q7 = {
    question: "Which of the following is the correct syntax to iterate through an array in JavaScript?",
    optionA: "(A) for (var i = 0; i < arrayName.length; i++) {<code>}",
    optionB: "(B) for (let i = 0; i < arrayName.length; i--) {<code>}",
    optionC: "(C) for (const i = 0; i > arrayName; i++) {<code>}",
    optionD: "(D) all of the above",
    Answer: "A"
}
const q8 = {
    question: "Which of the following is the correct syntax to check if an element is present in an array in JavaScript?",
    optionA: "(A) arrayName.indexOf(element) !== -1;",
    optionB: "(B) arrayName.includes(element);",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: "C"
}
const q9 = {
    question: "Which of the following is the correct syntax to convert a string to a number in JavaScript?",
    optionA: "(A) JSON.parse(string);",
    optionB: "(B) parseInt(string);",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: "B"
}
const q10 = {
    question: "Which of the following is the correct syntax to convert a number to a string in JavaScript?",
    optionA: "(A) '' + number;",
    optionB: "(B) String(number);",
    optionC: "(C) both (A) and (B)",
    optionD: "(D) none of the above",
    Answer: "D"
}

var timer;
var timeLeft = 100;
var questionIndex;
var score = 0;
var allscores = [];
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// stores updated score list in localstorage
function storeEntries() {
    localStorage.setItem("entries", JSON.stringify(allscores));
}

// calls stored score list and renders them to high score list
function init() {
    var storedScores = JSON.parse(localStorage.getItem("entries"));
    if (storedScores !== null) {
        allscores = storedScores
    }
    renderScores();
}

// Renders a new li for each score entered
function renderScores() {
    for (var i = 0; i < allscores.length; i++) {
      var entry = allscores[i];
      var li = document.createElement("li");
      li.textContent = entry;
      li.setAttribute("data-index", i);
      scoresList.appendChild(li);
    }
}

// saves initials and score to scores list
// calls storeEntries()
// reloads page
saveBttn.addEventListener("click", function(event) {
    event.preventDefault;
    var initialsInput = input.value.trim();
    var userScore = initialsInput + " " + score;
    if (initialsInput === "") {
        alert("Must input initials to save score.")
        return;
    }
    allscores.push(userScore);
    storeEntries();
    location.reload();
});

// shows save score window
// enters user score in window
// hides question container
function saveOn () {
    overlaySave.style.opacity = "1";
    queContainerEl.style.display = "none";
    overlayContainer.style.display = "flex";
    finalScoreEl.textContent = score;
}

// shows high scores window
// hides question container
function scoresOn() {
    overlayScores.style.opacity = "1";
    queContainerEl.style.display = "none";
    overlayContainer.style.display = "flex";
}

// hides high score window
function scoresOff() {
    overlayScores.style.opacity = "0";
    overlayContainer.style.display = "none";
}

// empties timer
// calls saveOn()
function endgame() {
    console.log("endgame");
    timeEl.textContent = "---";
    saveOn();
}

// shows correct feedback for 1 second
// adds point to score
function correctanswer() {
    feedbackEl.textContent = "Correct!";
    setTimeout(function() {
        feedbackEl.style.display = "none"
    }, 1000);
    console.log("correct ans");
    score++
    console.log("score", score);
}

// shows wrong feedback for 1 second
// deducts 10 seconds from timer
function wrongAnswer() {
    feedbackEl.textContent = "Wrong";
    setTimeout(function() {
        feedbackEl.style.display = "none"
    }, 1000);
    console.log("wrong ans");
    timeLeft-=10;
}

// checks for end of questions
// clears timer
// calls endgame()
// if not end of questions:
// moves to next question index
// calls renderQuestion()
function lastQuestion() {
    if (questionIndex == 9) {
    clearInterval(timer);
    timeEl.textContent = "---";
    endgame()
    } else {
    questionIndex++;
    renderQuestion();
    }
}

// checks for user click on option
// checks if answer is right or wrong, calls appropriate function
// calls last question
function checkAnswer(event) {
    var userOption = event.target;
    console.log("userOption", userOption);
    if (userOption.matches("button")) {
        let attrSelection = userOption.getAttribute("id")
        console.log(attrSelection)
        if(attrSelection == questions[questionIndex].Answer){
            feedbackEl.style.display = "flex";
            correctanswer();
        }else{
            feedbackEl.style.display = "flex";
            wrongAnswer();
        }
    }
    lastQuestion();
}

// renders question and options from correct position in idex
function renderQuestion() {
    console.log("Que Index",  questionIndex )
    questionEl.textContent = questions[questionIndex].question;
    option1El.textContent = questions[questionIndex].optionA;
    option2El.textContent = questions[questionIndex].optionB;
    option3El.textContent = questions[questionIndex].optionC;
    option4El.textContent = questions[questionIndex].optionD;
}

// clears timer when out of time
// alerts user
// calls endgame()
function timeOut() {
    timeEl.textContent = "---";
    clearInterval(timer);
    confirm("You ran out of time. Better luck next time.");
    if (confirm) {
        location.reload();
    };
};

// starts timer
function startTimer() {
    timer = setInterval(function() {
        timeEl.textContent = timeLeft;
        if (timeLeft > 0) {
            timeLeft--;
            timeEl.textContent = timeLeft;
        } else {
            timeOut();
        };
    }, 1000);
};

// calls startTimer()
// displays question container
// hides instructions, start button, and high scores 'link'
// sets question index to 0
// calls renderQuestions
// calls scoresOff()
function startquiz() {
    console.log("start-quiz");
    startTimer();
    queContainerEl.style.display = "flex";
    instructions.style.display = "none";
    startEl.style.display = "none";
    viewHighScoresEl.style.opacity = 0;
    questionIndex=0;
    renderQuestion();
    scoresOff();
};

startEl.addEventListener("click", startquiz);
queContainerEl.addEventListener("click", checkAnswer);
viewHighScoresEl.addEventListener("click", scoresOn);

init()