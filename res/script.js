/*
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


let reset = document.querySelector("#reset");
reset.style.display = "none";

let result = document.createElement("div");
document.body.appendChild(result);


let endresult = document.createElement("h1");
document.body.appendChild(endresult);
document.body.insertBefore(endresult, reset);
document.body.insertBefore(result, endresult);



let pscore = 0;
let cscore = 0;

let buttons = document.querySelectorAll(".choices");
buttons.forEach(function(item){
    item.addEventListener("click", event => {
        reset.style.display = "block";
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

function won(){
    endresult.textContent = "The battle is over! We have won!";
    reset.style.display = "block";
    buttons.forEach(function(item){
        item.disabled = true;
    });
}
function lost(){
    endresult.textContent = "The battle is over! We have lost!";
    reset.style.display = "block";
    buttons.forEach(function(item){
        item.disabled = true;
    });
}

function roundOfRps(playerSelection, computerChoice){
    if ((playerSelection === "rock" && computerChoice === "scissors") || (playerSelection === "paper" && computerChoice === "rock") || (playerSelection === "scissors" && computerChoice === "paper")){
        
        pscore++;
        if (pscore === 5){
            won();
        }
        console.log(pscore, cscore);
        return "You win! " + playerSelection + " beats " + computerChoice;
    }
    else if ((computerChoice === "rock" && playerSelection === "scissors") || (computerChoice === "paper" && playerSelection === "rock") || (computerChoice === "scissors" && playerSelection === "paper")){
        
        cscore++;
        if(cscore === 5){
            lost();
        }
        console.log(pscore, cscore);
        return "You lose! " + computerChoice + " beats " + playerSelection;
    }
    else{
        console.log(playerSelection, computerChoice);
        return "Tie game!";
    }
}

reset.addEventListener("click", event => {
    pscore = 0;
    cscore = 0;
    endresult.textContent = "";
    result.textContent = "";
    reset.style.display = "none";
    buttons.forEach(function(item){
        item.disabled = false;
    });
});
*/

/*
function game(){
    let pwins = 0;
    let cwins = 0;
    let i = 0;
    while (i < 5){
        if (pwins === 3){
            return "You won " + pwins + " to " + cwins;
        }
        else if(cwins === 3){
            return "You lost " + pwins + " to " + cwins;
        }
        let result = roundOfRps(playerSelection(), getComputerChoice());
        console.log(result);
        if (result.substring(0,7) === "You win"){
            pwins++;
            i++;
        }
        else if (result.substring(0,8) === "You lose"){
            cwins++;
            i++;
        }
    }
    if (pwins > cwins){
        return "You won " + pwins + " to " + cwins;
    }
    else if (cwins > pwins){
        return "You lost " + pwins + " to " + cwins;
    }
    else{
        return "It was a tie";
    }
}
*/
let game = document.querySelector(".game");
game.style.display = "none";
let play = document.getElementById("play");
let begin = document.querySelector(".begin");
play.addEventListener("click", event => {
    begin.style.display = "none";
    game.style.display = "block";
});


