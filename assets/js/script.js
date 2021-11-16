var startBtn = document.querySelector('#start');
var timerEl = document.querySelector('#time');
var respEl = document.querySelector('.response');
var startPg = document.querySelector('#start-content');
var quizPg = document.querySelector('#quiz-content');
var saveBtn = document.querySelector('#save');
var saveScoreCon = document.querySelector('#save-score-content');
var loadScoreCon = document.querySelector('#load-score-content');
var index = 0;
////
var questions = [
    {  
        question: "Commonly used data types DO NOT include: ",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with ________. ",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
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
////
var timeLeft = 100;
//

function check() {
    if (this.value !== questions[index].correct){
        timeLeft -= 10;
        if (timeLeft < 0){
            timeLeft = 0;
        }
        timerEl.textContent = timeLeft;
        respEl.classList.remove('hidden');
        respEl.textContent = "Wrong!";
        
    } else {
        respEl.classList.remove('hidden');
        respEl.textContent = "Correct!";
    };

    
    setTimeout(function(){
        respEl.classList.add('hidden');
    }, 500);

    index += 1;
    if(index === questions.length){
        end();
    } else {
        quizQuestions();
    }
}

function quizQuestions() {
    var curQuestion = questions[index];

    var quizEl = document.querySelector('#quiz-content h1');
    quizEl.textContent = curQuestion.question;

    var choicesEl = document.querySelector('.dis-choices');
    choicesEl.innerHTML = "";

    for(var i = 0; i < questions.length - 1; i++) {
        var choice = document.createElement('li');
        
        var button = document.createElement('button');
        button.classList.add('btn', 'btn-ans');
        button.setAttribute('value', curQuestion.choices[i]);
        button.textContent = curQuestion.choices[i];
        button.addEventListener('click', check);

        choice.append(button);

        choicesEl.append(choice);
    }

}
//
function end() {
    clearInterval(timeInterval);
    saveScoreCon.classList.remove('hidden');

    var finalScore = document.querySelector('#score');
    finalScore.textContent = timeLeft;

    quizPg.classList.add('hidden');
    
}
//
function start() {
    // Hiding the main-content and showing the quiz-content
    startPg.classList.add('hidden');
    quizPg.classList.remove('hidden');
    // Timer
    timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft--;
        if (timeLeft === 0) {
            timerEl.textContent = 0;
            console.log("Time is 0");
            end()
        }
    }, 1000);
    quizQuestions();
    
      
};
//
//Use localStorage to save the highscore

function saveHighscore() {
    var initials = document.querySelector('#name').value.trim();
    if(initials !== '') {
        var highscore = JSON.parse(localStorage.getItem('highscore')) || [];
        var person = {
            name: initials,
            score: timeLeft
        };

        highscore.push(person);
        localStorage.setItem('highscore', JSON.stringify(highscore));

        loadHighscore();
    }
}
//
function loadHighscore() {
    startPg.classList.add('hidden');
    saveScoreCon.classList.add('hidden');
    loadScoreCon.classList.remove('hidden');

    var scoresList = document.querySelector('.dis-highscores');
    var score = JSON.parse(localStorage.getItem('highscore')) || [];
    score.sort((a,b) => b.score - a.score);
    for(var i = 0; i < score.length; i++) {
        var scoreEl = document.createElement('li');
        scoreEl.textContent = score[i].name + " : " + score[i].score;

        scoresList.append(scoreEl);
    }
}
//
function clearHighscore() {
    localStorage.removeItem('highscore');
    goBack();
}
//
function goBack() {
    window.location.reload();
}
////
saveBtn.addEventListener("click", saveHighscore);
startBtn.addEventListener("click", start);
