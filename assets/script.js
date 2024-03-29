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

let question = document.getElementById("question");
let timerEl = document.querySelector("#timer");
let points = document.querySelector("#points");
let startButton = document.querySelector("#start-button");
let choice1 = document.getElementById("btn1");
let choice2 = document.getElementById("btn2");
let choice3 = document.getElementById("btn3");
let choice4 = document.getElementById("btn4");
let timeLeft = 60;
let addPoints = 10; //score
let maxQuestions = 4;
let questionCounter = 0;
//need array of questions
let questions = [
  {
    question: "which is NOT a programming language?",
    choice1: "Bananascript",
    choice2: "Java",
    choice3: "Python",
    choice4: "Javascript",
    correctAnswer: "Bananascript",
  },
  {
    question: "is coding easy?",
    choice1: "yes",
    choice2: "easy peasy",
    choice3: "it is not",
    choice4: "maybe",
    correctAnswer: "it is not",
  },
  {
    question: "Javascript is a ____-side programming language?",
    choice1: "client",
    choice2: "server",
    choice3: "both client and server",
    choice4: "none of the above",
    correctAnswer: "both client and server",
  },
  {
    question: "who could beat Keanu Reeves in a fight?",
    choice1: "Keanu Reeves",
    choice2: "Ted from Bill and Ted's Excellent Adventure",
    choice3: "Reanu Keeves",
    choice4: "no one",
    correctAnswer: "Reanu Keeves",
  },
];

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
  choice4.textContent = questions[0].choice4;
}

function displayNextQuestions() {
  if (questions.length === 0 || questionCounter >= maxQuestions) {
    endGame();
  } else {
    questionCounter++;
    displayQuestion();
  }
}

function shuffleQuestions() {
  questions.sort(() => Math.random() - 0.5);
}

// function to start quiz on start button click
function startQuiz() {
  questionCounter = 0;
  addPoints = 0;
  startTimer();
  displayQuestion();
}

startQuiz();

//need function to start timer on start button click
function startTimer() {
  let timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "game over";
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}
//function to save initials and score to local storage
function saveScore() {
  localStorage.setItem("score", JSON.stringify(addPoints));
}

//need function to check if answer is correct
function checkAnswer() {
  if (questions.length === 0) {
    //create button to finish game and proceed to hs.html
    saveScore();
    endGame();
  }
  if (questions[0].correctAnswer === this.innerHTML) {
    console.log("correct");
    addPoints += 10;
    points.textContent = addPoints + " points";
    saveScore();
  } else {
    console.log("incorrect");
    timeLeft -= 10;
  }
  //display next question in function
  questions.shift();
  displayNextQuestions();
  //if there are no more questions, end the game and go to hs.html
}

// function to hide answer buttons and create button to finish game and proceed to hs.html
function endGame() {
  choice1.style.display = "none";
  choice2.style.display = "none";
  choice3.style.display = "none";
  choice4.style.display = "none";
  var finishButton = document.createElement("button");
  finishButton.textContent = "Finish Game";
  finishButton.addEventListener("click", function () {
    window.location.href = "final-score.html";
  });
  document.body.appendChild(finishButton);
}
