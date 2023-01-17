var currentQuestion = 0;
var timeLeft = 0;
var userScore = 0;

function quizTimer() {
    timeLeft = 60;
    var timeInterval = setInterval(function () {
        var timerEl = document.getElementById('time');
        timeLeft--;
        timerEl.textContent = timeLeft; // Displays timer on the page in real time.
  
        if(timeLeft <= 0) {
            clearInterval(timeInterval);
            endQuiz();
        }

    }, 1000); //1000ms interval means the timer will countdown every second.
}

function checkAnswer(event){
    var element = event.target;
    var selectedAnswer = element.getAttribute("data-id"); //Takes id of chosen button

    if(questions[currentQuestion].answers[selectedAnswer][1] === true){ //Checks answer array to confirm if selected answer is correct
        console.log("Correct answer selected");
        userScore++; //Adds a point to score
        currentQuestion++; //Moves on to the next question
        questionDisplay();
    }
    else{
        console.log("Incorrect answer selected");
        timeLeft -= 10; //Takes 10 seconds off the current time remaining
        document.getElementById('time').textContent = timeLeft; //Updates timer on page with new value
        currentQuestion++;
        questionDisplay();
    }
}

function questionDisplay(){
    if(currentQuestion < questions.length){
        document.getElementById('question-title').textContent = questions[currentQuestion].question; //Displays question on page
        document.getElementById('choice1').textContent = questions[currentQuestion].answers[0][0]; //Displays answers within 4 buttons on page
        document.getElementById('choice2').textContent = questions[currentQuestion].answers[1][0];
        document.getElementById('choice3').textContent = questions[currentQuestion].answers[2][0];
        document.getElementById('choice4').textContent = questions[currentQuestion].answers[3][0];
    }
    else{
        console.log("End of questions");
        endQuiz();
    }
}

function startQuiz(){
    console.log("Quiz started.");
    userScore = 0;
    quizTimer(); //Starts quiz timer
    
    document.getElementById('start-screen').className = 'hide'; //Hides start screen
    document.getElementById('questions').className ='start'; //Displays question screen
    questionDisplay();
    
    document.querySelector('#choice1').addEventListener('click', checkAnswer);
    document.querySelector('#choice2').addEventListener('click', checkAnswer);
    document.querySelector('#choice3').addEventListener('click', checkAnswer);
    document.querySelector('#choice4').addEventListener('click', checkAnswer);
};

function endQuiz(){
    document.getElementById('questions').className = 'hide';
    document.getElementById('end-screen').className ='start';

    timeLeft = 0; //Ends timer when quiz is over
    document.getElementById('time').textContent = timeLeft;

    document.getElementById('final-score').textContent = userScore; //Displays user's score
}

document.querySelector('#submit').addEventListener("click", function(event){
    event.preventDefault();

    var userInitialsInput = document.querySelector("#initials");
    var highscores = JSON.parse(localStorage.getItem("highscores"));;
    var newScore = [userInitialsInput.value.trim(), userScore]

    if(userInitialsInput === ""){
        return;
    }

    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    userScore = 0;
    userInitialsInput = "";

    console.log(highscores);
    displayHighscores();
});

document.querySelector('#start').addEventListener('click', startQuiz);