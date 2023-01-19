window.onload = function () {


// may get all the scores to save and pop up someday, but it isn't right now. 
let newScore = localStorage.getItem("score");
let latestUserName = localStorage.getItem("user");

function createTable() {
var table = document.createElement("table");
var row = document.createElement("tr");

var scoreCell = document.createElement("td");
scoreCell.innerHTML = newScore;
row.appendChild(scoreCell);

var nameCell = document.createElement("td");
nameCell.innerHTML = latestUserName;
row.appendChild(nameCell);

table.appendChild(row);

document.getElementById('table-container').appendChild(table);

};

createTable();


//event listener for to clear local storage from high score page
document.getElementById("clear-scores").addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
});
}

function goBack() {
    window.history.back();
}