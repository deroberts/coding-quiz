// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// need first set of questions to load on start button click
// global variables
var question = document.getElementById("question");
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#start-button");
var choice1 = document.getElementById("btn1");
var choice2 = document.getElementById("btn2");
var choice3 = document.getElementById("btn3");
var choice4 = document.getElementById("btn4");
var timeLeft = 60;

//need array of questions
let questions = [
    {
        question: "what is your favorite color?",
        choice1: "red",
        choice2: "blue",
        choice3: "green",
        choice4: "yellow",
        correctAnswer: "green"
    },
    {
        question: "what is your favorite animal?",
        choice1: "cat",
        choice2: "dog",
        choice3: "bird",
        choice4: "fish",
        correctAnswer: "dog"
    },
    {
        question: "what is your favorite food?",
        choice1: "pizza",
        choice2: "pasta",
        choice3: "salad",
        choice4: "sandwich",
        correctAnswer: "pizza"
    },
]

//function to shuffle questions after answer is selected
function shuffleQuestions() {
    questions.sort(() => Math.random() - .5)
}



//need function to display questions
function displayQuestion() {
    question.innerHTML = questions[0].question;
    choice1.innerHTML = questions[0].choice1;
    choice2.innerHTML = questions[0].choice2;
    choice3.innerHTML = questions[0].choice3;
    choice4.innerHTML = questions[0].choice4;
}



//need function to start timer on start button click
function startTimer() {
    let timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}

//need function to check if answer is correct
function checkAnswer() {
    if (questions[0].correctAnswer === this.innerHTML) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}


// function to start quiz on start button click
function startQuiz() {
    startTimer();
    displayQuestion();
    checkAnswer();
    shuffleQuestions();
}

startQuiz();


