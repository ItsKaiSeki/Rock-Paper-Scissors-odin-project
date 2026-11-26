
console.log("Hello, World");
console.log("Let's Play Rock, Paper, Scissors!")

// These handle the score, which are "let" variables since they can have a changing variable.
let humanScore = 0;
let computerScore = 0;

// This function handles the computer choice, let is saying, let num be the variable.
//  and let num = ( be ) what ever comes out from Math.floor(Math.random) math floor just rounds up the numbers
//  so instead of it being 1.5, 2.3, .1.8 its 0,1,2. 0 counts as a number. 
// in simple terms if num = 0 return rock. we are essentially giving numbers " names " so instead of it returning 
//  0 it gives rock, instead of returning 1 it goes paper, and so on and so fourth.
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

// This function handles the human choice, we are using choice, as the variable and telling it 
// Hey what ever the user inputs, which in this case is, rock, paper, scissors. 
// Take that input and change it to lowercase. then, IF that input is rock, return rock, so on and so fourth, 
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

// This function takes all the info from earlier, and plays a round, so it takes 
// The human choice and the computer choice and I had to make it so I set the logic regarding it. 
// The first if handles the tie scenario, so if the humanchoice and the computerchoice are the same, return
// IT'S A TIE!, then. I had to set the logic for the winning conditions. 
// Which then return a YOU WIN! 
// And regarding the outcome it also increases the score accordingly using humanScore ++ where ++ increases it by one. 
// The last conditional just swaps the positions of the winning scenario, so if the computer then gets the winning hand
// Then it will output " YOU LOSE !" and give the computer its point. 
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


// PlayRound has two parameters which will get fed a different parameter later,
// In this case CONST human and computer selections are the get human and get computer choices,
// CONST being a thing that doesn't change so its a consistent parameter, then 
// PlayRound takes (humanSelection, and computerSelection and puts them against each other and then takes the game logic we set earlier to put it all together.)
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
   