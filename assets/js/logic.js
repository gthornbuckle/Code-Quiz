var currentQuestion = 0;
var timeLeft = 0;

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

function checkAnswer(event){
    var element = event.target;
    var selectedAnswer = element.getAttribute("data-id"); //Takes id of chosen button
    if(questions[currentQuestion].answers[selectedAnswer][1] === true){ //Checks answer array to confirm if selected answer is correct
        console.log("Correct answer selected");
    }
    else{
        console.log("Incorrect answer selected");
    }
}

function startQuiz(){
    console.log("Quiz started.");
    quizTimer(); //Starts quiz timer

    document.getElementById('start-screen').className = 'hide'; //Hides start screen
    document.getElementById('questions').className ='start'; //Displays question screen

    document.getElementById('question-title').textContent = questions[currentQuestion].question; //Displays question on page
    document.getElementById('choice1').textContent = questions[currentQuestion].answers[0][0]; //Displays answers within 4 buttons on page
    document.getElementById('choice2').textContent = questions[currentQuestion].answers[1][0];
    document.getElementById('choice3').textContent = questions[currentQuestion].answers[2][0];
    document.getElementById('choice4').textContent = questions[currentQuestion].answers[3][0];
    
    document.querySelector('#choice1').addEventListener('click', checkAnswer);
    document.querySelector('#choice2').addEventListener('click', checkAnswer);
    document.querySelector('#choice3').addEventListener('click', checkAnswer);
    document.querySelector('#choice4').addEventListener('click', checkAnswer);

};



document.querySelector('#start').addEventListener('click', startQuiz);