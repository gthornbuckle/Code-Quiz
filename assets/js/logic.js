function quizTimer() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        var timerEl = document.getElementById('time');
        timeLeft--;
        timerEl.textContent = timeLeft;
  
        if(timeLeft === 0) {
            clearInterval(timeInterval);
            outOfTime();
        }

    }, 1000);
}

function outOfTime(){
    console.log("Out of time.");
}

function startQuiz(){
    console.log("Quiz started.");
    quizTimer();
}

var startButton = document.querySelector('#start');
startButton.addEventListener('click', startQuiz);