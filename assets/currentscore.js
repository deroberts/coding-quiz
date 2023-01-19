
// all new above this line


// get score from local storage and put it in the high score list
function saveHighScore() {
    preventDefault();
    var highScore = JSON.parse(localStorage.getItem("score")) || [];
    if (highScore === null) {
        highScore = [];
    } else {
        highScore = JSON.parse(highScore);
    }
}
//on page load get high score from local storage and display it
window.onload = function () {
var currentScore = document.getElementById("high-score");
if (currentScore) {
    currentScore.innerHTML = localStorage.getItem("score");
}

// adds user next to respective score
var userName = document.getElementById("initials");
if (userName) {
    userName.innerHTML = localStorage.getItem("user");
}
}


// create table on high-score.html page to add usernames and scores 

// document.getElementById("hs-btn").addEventListener("click", createTable);
// document.getElementById("hs-btn").addEventListener("load", createTable);

// let newScore = localStorage.getItem("score");
// let latestUserName = localStorage.getItem("user");

// function createTable() {
// var table = document.createElement("table");
// var row = document.createElement("tr");

// var scoreCell = document.createElement("td");
// scoreCell.innerHTML = newScore;
// row.appendChild(scoreCell);

// var nameCell = document.createElement("td");
// nameCell.innerHTML = latestUserName;
// row.appendChild(nameCell);

// table.appendChild(row);

// document.body.appendChild(table);

// };
// };






// function createTable() {
// const table = document.getElementById("high-score-table");
// let row1 = table.insertRow();
// let row2 = table.insertRow();
// let cell1_1 = row1.insertCell();
// let cell1_2 = row1.insertCell(1);
// let cell2_1 = row2.insertCell(0);
// let cell2_2 = row2.insertCell(1);
// cell1_1.innerHTML = "User";
// cell1_2.innerHTML = userName;
// cell2_1.innerHTML = "Score";
// cell2_2.innerHTML = currentScore;
// }









