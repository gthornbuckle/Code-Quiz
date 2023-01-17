function quizTimer() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        var timerEl = document.getElementById('time');
        timeLeft--;
        timerEl.textContent = timeLeft; // Displays timer on the page in real time.
  
        if(timeLeft === 0) {
            clearInterval(timeInterval);
            outOfTime();
        }

    }, 1000); //1000ms interval means the timer will countdown every second.
}

function outOfTime(){
    console.log("Out of time.");
}

function startQuiz(){
    console.log("Quiz started.");
    quizTimer(); //Starts quiz timer

    document.getElementById('start-screen').style.display='none'; //Hides start screen
    document.getElementById('questions').style.display='block'; //Displays question screen
};


var startButton = document.querySelector('#start');
startButton.addEventListener('click', startQuiz);