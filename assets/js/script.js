var startBtn = document.querySelector('#start');
var timerEl = document.querySelector('#time');
var respEl = document.querySelector('#response');
var highscore = document.querySelector('#high-score');
var questions = [
    {  
        question: "Commonly used data types DO NOT include: ",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with ________. ",
        choices: ["quotes",  "curly brackets", "parenthesis", "square brackets"],
        correct: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ________. ",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables. ",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correct: "console.log"

    }
];
function quiz() {
    timer();
    slides();
    
    
};
//Timer
function timer() {
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = 0;
            console.log("Time is 0");
            clearInterval(timeInterval);
            end()
        }
    }, 1000);
}
//slides transitioning from start to questions(also contains the right and wrong) to end
function slides() {
    var startPg = document.querySelector(".content");
    startPg.remove();
    console.log("Removed starting page");
    quizContent();
    
}
    

function quizContent() {
    var quesAnsEl = document.createElement("div");
    quesAnsEl.className = "quiz-content";
    for(var i=0; i < questions.length; i++) {
        var text = document.createElement("h1");
        text.className = "quiz-text";
        text.innerHTML = "<h1>" + questions.question + "</h1>";
        quesAnsEl.appendChild(text);
    }
    

    
    
}
//end Enter initials and save highscore
function end() {
    console.log("END")
    saveHighscore();
}
//Use localStorage to save the highscore
function saveHighscore() {
    console.log("Save Highscore");
}
function loadHighscore() {
    console.log("Highscore");
}
highscore.addEventListener("click", loadHighscore);
startBtn.addEventListener("click", quiz);