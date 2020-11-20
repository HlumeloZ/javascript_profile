var secret = Math.floor(Math.random() * 10) + 1;

var startBtn = document.getElementById("startButton");
startBtn.onclick = guessNumber;

function guessNumber() {
    var guess = parseInt(prompt("Guess a Number between 1-10"));
    checkAnswer(guess);
}

function checkAnswer(guess) {
    while (guess != secret) {
        if (guess < secret) {
            alert("Incorrect, too Low");
            guessNumber();
        } else if (guess > secret) {
            alert("Incorrect, too high");
            guessNumber();
        } else {
            alert("Invalid");
            guessNumber();
        }
    }
    alert("Correct");
}