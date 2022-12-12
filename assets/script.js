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
var points = document.querySelector("#points");
var startButton = document.querySelector("#start-button");
var choice1 = document.getElementById("btn1");
var choice2 = document.getElementById("btn2");
var choice3 = document.getElementById("btn3");
var choice4 = document.getElementById("btn4");
var timeLeft = 60;
let addPoints = 10; //score
const maxQuestions = 3;
var questionCounter = 0;
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

choice1.addEventListener("click", checkAnswer);
choice2.addEventListener("click", checkAnswer);
choice3.addEventListener("click", checkAnswer);
choice4.addEventListener("click", checkAnswer);


//need function to display questions and answers, shuffle them, and make sure they don't repeat
function displayQuestion() {
    question.textContent = questions[0].question;
    choice1.textContent = questions[0].choice1;
    choice2.textContent = questions[0].choice2;
    choice3.textContent = questions[0].choice3;
    choice4.textContent = questions[0].choice4
};

function displayNextQuestions() {
    questionCounter++;
    displayQuestion();
}

function shuffleQuestions() {
    questions.sort(() => Math.random() - .5);
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
            timerEl.textContent = 'game over';
            clearInterval(timeInterval);
        }
    }, 1000);
}

//need function to check if answer is correct
function checkAnswer() {
    if (questions.length === 1) {
        window.location.href = "hs.html";
    }
    if (questions[0].correctAnswer === this.innerHTML) {
        console.log("correct");
        addPoints += 10;
    } else {
        console.log("incorrect");
    }
    //display next question in function
    questions.shift();
    displayNextQuestions();
    //if there are no more questions, end the game and go to hs.html
    
}


// function to start quiz on start button click
function startQuiz() {
    questionCounter = 0;
    addPoints = 0;
    startTimer();
    displayQuestion();
}

startQuiz();


