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

play.addEventListener("click", event => {
    begin.style.display = "none";
    game.style.display = "block";
});

let choices = document.querySelectorAll(".choice");
choices.forEach(function(item){
    item.addEventListener("click", event => {
        let playersChoice = playerSelection(item.textContent);
        result.textContent = roundOfRps(playersChoice, getComputerChoice());
    })
});

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

function roundOfRps(playerSelection, computerChoice){
    let standing = "";
    if ((playerSelection === "rock" && computerChoice === "scissors") || (playerSelection === "paper" && computerChoice === "rock") || (playerSelection === "scissors" && computerChoice === "paper")){
        
        pscore++;
        if (pscore === 5){
            won();
        }
        console.log(pscore, cscore);
        standing = `You: ${pscore} - Computer: ${cscore}`;
        standings.textContent = standing;
        return "Your point! " + playerSelection + " beats " + computerChoice;
    }
    else if ((computerChoice === "rock" && playerSelection === "scissors") || (computerChoice === "paper" && playerSelection === "rock") || (computerChoice === "scissors" && playerSelection === "paper")){
        
        cscore++;
        if(cscore === 5){
            lost();
        }
        console.log(pscore, cscore);
        standing = `You: ${pscore} - Computer: ${cscore}`;
        standings.textContent = standing;
        return "Computers point! " + computerChoice + " beats " + playerSelection;
    }
    else{
        console.log(playerSelection, computerChoice);
        return "Tie!";
    }
}

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



