// get score from local storage and put it in the high score list
function saveHighScore() {
    preventDefault();
    var highScore = localStorage.getItem("score");
    if (highScore === null) {
        highScore = [];
    } else {
        highScore = JSON.parse(highScore);
    }
}
//on page load get high score from local storage and display it
document.getElementById("high-score").innerHTML = localStorage.getItem("score");

// add user to high score list
document.getElementById("initials").innerHTML = localStorage.getItem("user");
