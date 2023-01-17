var highscores = JSON.parse(localStorage.getItem("highscores"));;
var highscoreList = document.querySelector("#highscores");

function displayHighscores(){

    html = "";

    for(var i = 0; i < highscores.length; i++){

        html += "<li>" +highscores[i]+ "</li>";
    }

    document.getElementById("highscores").innerHTML = html;
}

displayHighscores();