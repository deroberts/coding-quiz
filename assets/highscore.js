const user = document.getElementById('user');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const recentScore = localStorage.getItem('recentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGHSCORE = 5;
console.log(highScores)

finalScore.innerText = recentScore;

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();
};

const score = {
    score: recentScore,
    name: username.value
};
highScores.push(score);
highScores.sort( (a,b) => {
    return b.score - a.score;
})
highScores.splice(5);

localStorage.setItem('highScores', JSON.stringify(highScores))

console.log(highScores);