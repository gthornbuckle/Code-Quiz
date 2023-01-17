var userInitialsInput = document.querySelector("#initials");

document.querySelector('#submit').addEventListener("click", function(event){
    event.preventDefault();

    var user = {
        userInitials: userInitialsInput.value.trim(),
        highScore: userScore
    };

    console.log(user);

});