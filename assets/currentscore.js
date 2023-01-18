
// get score from local storage and put it in the high score list
function saveHighScore() {
    preventDefault();
    var highScore = JSON.parse(localStorage.getItem("score")) || [];
    if (highScore === null) {
        highScore = [];
    } else {
        highScore = JSON.parse(highScore);
    }
    insertRow();
}
//on page load get high score from local storage and display it
var currentScore = document.getElementById("high-score").innerHTML = localStorage.getItem("score");

// adds user next to respective score
var userName = document.getElementById("initials").innerHTML = localStorage.getItem("user");


// create table on high-score.html page to add usernames and scores 
function createTable() {
    var table = document.getElementById("high-score-table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = localStorage.getItem("user");
    cell2.innerHTML = localStorage.getItem("score");
}

document.querySelector("#hs-btn").addEventListener("click", createTable);






