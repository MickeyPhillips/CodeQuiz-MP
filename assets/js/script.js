var startBtn = document.querySelector('#start');
var timerEl = document.querySelector('#time');
var respEl = document.querySelector('#response');
var highscore = document.querySelector('#high-score');
var questions = [
    {  
        question: "Commonly used data types DO NOT include: ",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        },
        correct: "3"
    },
    {
        question: "The condition in an if / else statement is enclosed with ________. ",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets"
        },
        correct: "3"

    },
    {
        question: "Arrays in JavaScript can be used to store ________. ",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correct: "4"

    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables. ",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis"
        },
        correct: "3"

    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log"
        },
        correct: "4"

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