function getComputerChoice(){
    let i =  Math.random();
    if (i <= 1/3){
        i = "rock";
    }   else if (i > 2/3){
        i  = "paper";
    }   else{
        i = "scissors";
    }
    return i;
}

function getPlayerChoice(){
    let i = prompt("Type Rock, Paper or Scissors");
    i  = i.toLowerCase();
    return i;
}
console.log(getPlayerChoice)