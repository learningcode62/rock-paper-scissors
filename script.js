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

function playRound(playerChoice, computerChoice){
    if(playerChoice ===  computerChoice){
        console.log(`Draw! ${playerChoice} is even with ${computerChoice}`)
    } else if(playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
        console.log(`You win! ${playerChoice} beats ${computerChoice}`)
        return "win";
    } else {
        console.log(`You lose! ${computerChoice} beats  ${playerChoice}`)
        return "lose"
    }
}

let playerScore = 0;
let computerScore = 0;


function playGame(){

    for(let a = 0; a < 5; a++){
        let playerSelection = getPlayerChoice();
        let computerSelection  = getComputerChoice();
        let i  = playRound(playerSelection, computerSelection);
        if(i === "win"){playerScore++}
        else if(i === "lose"){computerScore++}
    }
    if(playerScore > computerScore){
        console.log(`You win ${playerScore} to ${computerScore}`)
    } else if(playerScore <computerScore){
        console.log(`You lose ${playerScore} to ${computerScore}`)
    } else{console.log(`You draw with ${playerScore} points each`)}
}



playGame();
