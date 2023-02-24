// Implementing the beginning of the page and getting the required elements

let pscore = 0;
let cscore = 0;

let game = document.querySelector(".game");
game.style.display = "none";

let play = document.getElementById("play");

let begin = document.querySelector(".begin");

let result = document.querySelector(".result");

let standings = document.querySelector(".standings");

let endresult = document.querySelector(".endresult");

let reset = document.querySelector(".reset");

// if play button clicked, the game starts and the played elements show up

play.addEventListener("click", event => {
    begin.style.display = "none";
    game.style.display = "block";
});

// starting a round of rock, paper, scissors each time an icon is clicked, the result is displayed on screen

let choices = document.querySelectorAll(".choice");
choices.forEach(function(item){
    item.addEventListener("click", event => {
        let playersChoice = playerSelection(item.textContent);
        result.textContent = roundOfRps(playersChoice, getComputerChoice());
    })
});

// returning the choice of the player as a lowercase string for easier comparison

function playerSelection(playersChoice){
    
    playersChoice = playersChoice.toLowerCase();
    if (playersChoice === "rock" || playersChoice === "paper" || playersChoice == "scissors"){
        return playersChoice;
    }
    else{
        alert("Hey!");
        return playerSelection();
    }
}

// returning the choice of the computer using a random number generator

function getComputerChoice(){
    let computerNumber = Math.floor(Math.random() * (3-1+1) + 1);
    if (computerNumber === 1){
        return "rock";
    }
    else if (computerNumber === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

// playing a round of rock, paper scissors
// the result of each round is displayed with the points increasing (if it's a tie the points won't change)
// once a player reaches 5 points the game ends and the end result is displayed using the won() and lost() functions
function roundOfRps(playerSelection, computerChoice){
    let standing = "";
    if ((playerSelection === "rock" && computerChoice === "scissors") || (playerSelection === "paper" && computerChoice === "rock") || (playerSelection === "scissors" && computerChoice === "paper")){
        
        pscore++;
        if (pscore === 5){
            won();
        }
        standing = `You: ${pscore} - Computer: ${cscore}`;
        standings.textContent = standing;
        return "Your point! " + playerSelection + " beats " + computerChoice;
    }
    else if ((computerChoice === "rock" && playerSelection === "scissors") || (computerChoice === "paper" && playerSelection === "rock") || (computerChoice === "scissors" && playerSelection === "paper")){
        
        cscore++;
        if(cscore === 5){
            lost();
        }
        standing = `You: ${pscore} - Computer: ${cscore}`;
        standings.textContent = standing;
        return "Computers point! " + computerChoice + " beats " + playerSelection;
    }
    else{
        console.log(playerSelection, computerChoice);
        return "Tie!";
    }
}

// ending the game and disabling the choices

function won(){
    endresult.textContent = "Congratulations! You have won!";
    result.style.display = "none";
    choices.forEach(function(item){
        item.style.pointerEvents = "none";
    });
}
function lost(){
    endresult.textContent = "You have lost!";
    result.style.display = "none";
    choices.forEach(function(item){
        item.style.pointerEvents = "none";
    });
}

// if the play again button is clicked (even during the game) all records are reset and the game starts over

reset.addEventListener("click", event => {
    pscore = 0;
    cscore = 0;
    endresult.textContent = "";
    standings.textContent = "";
    result.style.display = "block";
    result.textContent = "";
    choices.forEach(function(item){
        item.style.pointerEvents = "auto";
    });
});



