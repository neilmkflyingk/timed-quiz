const startEl = document.getElementById("start");
const timeEl = document.getElementById("time");
const questionEl = document.getElementById("question");
const option1El = document.getElementById("A");
const option2El = document.getElementById("B");
const option3El = document.getElementById("C");
const option4El = document.getElementById("D");
const instructions = document.querySelector(".card-header");
const queContainerEl = document.querySelector(".question-container");
const feedbackEl = document.querySelector("#feedback");
const finalScoreEl = document.querySelector("#finalScore");
const overlaySave = document.querySelector("#saveScore");
const overlayScores = document.querySelector("#highScores");
const overlayContainer = document.querySelector(".container");
const saveBttn = document.querySelector("#saveBttn");
const input = document.querySelector("#initials");
const viewHighScoresEl = document.querySelector("#scores");
const scoresList = document.querySelector("#scoresList");

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

function storeEntries() {
    localStorage.setItem("entries", JSON.stringify(allscores));
}

function init() {
    var storedScores = JSON.parse(localStorage.getItem("entries"));
    if (storedScores !== null) {
        allscores = storedScores
    }
    renderScores();
}

// Render a new li for each score entered
function renderScores() {
    for (var i = 0; i < allscores.length; i++) {
      var entry = allscores[i];
      var li = document.createElement("li");
      li.textContent = entry;
      li.setAttribute("data-index", i);
      scoresList.appendChild(li);
    }
  }

// saves initials and score,
saveBttn.addEventListener("click", function(event) {
    event.preventDefault
    var initialsInput = input.value;
    var userScore = initialsInput + " " + score;
    allscores.push(userScore);
    storeEntries();
    location.reload();
});

function saveOn () {
    overlaySave.style.opacity = "1";
    queContainerEl.style.display = "none";
    overlayContainer.style.display = "flex";
    finalScoreEl.textContent = score;
}

function scoresOn() {
    overlayScores.style.opacity = "1";
    queContainerEl.style.display = "none";
    overlayContainer.style.display = "flex";
}

function scoresOff() {
    overlayScores.style.opacity = "0";
    overlayContainer.style.display = "none";
}

function endgame() {
    console.log("endgame");
    timeEl.textContent = "---";
    saveOn();
}

function correctanswer() {
    feedbackEl.textContent = "Correct!";
    setTimeout(function() {
        feedbackEl.style.display = "none"
    }, 1000);
    console.log("correct ans");
    feedbackEl.textContent = "Correct!";
    score++
    console.log("score", score);
}

function wrongAnswer() {
    feedbackEl.textContent = "Wrong";
    setTimeout(function() {
        feedbackEl.style.display = "none"
    }, 1000);
    console.log("wrong ans");
    timeLeft-=10;
}

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

function renderQuestion() {
    console.log("Que Index",  questionIndex )
    questionEl.textContent = questions[questionIndex].question;
    option1El.textContent = questions[questionIndex].optionA;
    option2El.textContent = questions[questionIndex].optionB;
    option3El.textContent = questions[questionIndex].optionC;
    option4El.textContent = questions[questionIndex].optionD;
}

function timeOut() {
    timeEl.textContent = "---";
    clearInterval(timer);
    alert("You are out of time. Click ok to see your score.");
    if (confirm == true) {
        endgame();
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

// starts timer (calls first question) 
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