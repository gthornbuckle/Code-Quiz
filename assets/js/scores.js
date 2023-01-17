var highscores = JSON.parse(localStorage.getItem("highscores")); //Retrieves highscore array from local storage
var highscoreList = document.querySelector("#highscores");

function displayHighscores(){

    scoreDisplay = "";

    for(var i = 0; i < highscores.length; i++){

        scoreDisplay += "<li>" +highscores[i][0]+ "  -  " +highscores[i][1]+ "</li>"; //Creates a new list item for each highscore
    }

    document.getElementById("highscores").innerHTML = scoreDisplay; //Adds list elements to html file
}

function clearHighscores(){
   var removeScoreConfirmation = confirm("Are you sure you want to clear the highscores?");
   if(removeScoreConfirmation === true){

        highscores = []; //Sets highscores array to empty and saves to local storage
        localStorage.setItem("highscores", JSON.stringify(highscores));
        displayHighscores();
   }
   else{
    return;
   }
}

document.querySelector('#clear').addEventListener('click', clearHighscores);
displayHighscores();