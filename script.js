
console.log("Hello, World");
console.log("Let's Play Rock, Paper, Scissors!")


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return ('rock');
    }else if (num === 1) {
        return ('paper');
    }else if (num === 2) {
        return ('scissors');
    }
}

function getHumanChoice() {
    let choice = prompt("Let's Play Rock, Paper, Scissors!").toLowerCase(); 
        if (choice === "rock") {
            return ("rock");
        }else if (choice === "paper") {
            return ("paper");
        }else if (choice === "scissors") {
            return ("scissors");
    }
}


function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("its a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock") 
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
  } else { 
    computerScore++;
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);