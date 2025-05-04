function getComputerChoice(){
    let i = Math.floor(Math.random() * 3);
    if (i === 0){
        return "rock";
    } else if (i === 1){
        return "paper";
    } else {
        return "scissors"
    }
}

function getPlayerChoice(){
    let i = prompt("Type Rock, Paper or Scissors");
    i  = i.toLowerCase();
    return i;
}

let playerScore = 0;
let computerScore = 0;




// playGame();
console.log(playerSelection);
console.log(computerSelection);