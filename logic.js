//console.log("Hello, World!");

// Initialize Points
let humanScore = 0;
let computerScore = 0;
let rounds = 0;

// Choice Code
// No input parameters
// Will return  a string "rock", "paper" or "scissors"
function getComputerChoice() {
  let value = Math.floor(Math.random() * 2);

  if (value == 0) {
    return "Rock";
  } else if (value == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

/*
Human Choice Code

The user shall input his choice, Rock, Paper Or Scissors
*/
function getHumanChoice() {
  let humanChoice = prompt("Please select Rock, Paper or Scissors.");
  let otherChoice = humanChoice.toLowerCase();

  let finalChoice = otherChoice.charAt(0).toUpperCase() + otherChoice.slice(1);
  return finalChoice;
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//console.log(humanSelection);

function playRound(humanSelection, computerSelection) {
  //Cases

  //Equal Case
  if (humanSelection === computerSelection) {
    return "Try Again!";
  }

  if (humanSelection === "Scissors" && computerSelection === "Paper") {
    humanScore += 1;
    return "Scissors beats Paper, You win!";
  } else if (humanSelection === "Scissors" && computerSelection === "Rock") {
    computerScore += 1;
    return "Rock beats Scissors, Computer Wins!";
  } else if (humanSelection === "Paper" && computerSelection === "Rock") {
    humanScore += 1;
    return "Paper beats Rock, You win!";
  } else if (humanSelection === "Paper" && computerSelection === "Scissors") {
    computerScore += 1;
    return "Scissors beats Paper, Computer Wins!";
  } else if (humanSelection === "Rock" && computerSelection === "Scissors") {
    humanScore += 1;
    return "Rock beat Scissors, You win!";
  } else {
    computerScore += 1;
    return "Paper beats Rock, Computer Wins!";
  }
}

//console.log(playRound(humanSelection, computerSelection));
//console.log(humanScore);
//console.log(computerScore);

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }
}

playGame();
console.log(humanScore);
console.log(computerScore);

/*
const test = Math.random() * 2;
console.log(test);
console.log(Math.floor(test));
*/
