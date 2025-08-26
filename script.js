//Grab button elements
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

//Global Variables
let humanScore = 0;
let computerScore = 0;

//Event listeners for choice buttons
rock.addEventListener("click", function () {
  let playerSelection = getHumanChoice("rock");
  let computerSelection = getComputerChoice();
  playGame(computerScore, humanScore, playerSelection, computerSelection);
});

paper.addEventListener("click", function () {
  let playerSelection = getHumanChoice("paper");
  let computerSelection = getComputerChoice();
  playGame(computerScore, humanScore, playerSelection, computerSelection);
});

scissors.addEventListener("click", function () {
  let playerSelection = getHumanChoice("scissors");
  let computerSelection = getComputerChoice();
  playGame(computerScore, humanScore, playerSelection, computerSelection);
});

// write function to get human choice
function getHumanChoice(humanChoice) {
  console.log("Human Selects", humanChoice);
  return humanChoice;
}

// write function to get computer choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  //generate array index
  const randomIndex = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomIndex];
  console.log("Computer Selects", computerChoice);
  return computerChoice;
}

// write logic to play a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie mate, try again!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Sorry Mate you lose this one!");
    ++computerScore;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Sorry Mate you lose this one!");
    ++computerScore;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Sorry Mate you lose this one!");
    ++computerScore;
  } else {
    console.log("Congrats! You win this round!");
    ++humanScore;
  }
  console.log("Player Score:", humanScore, "Computer Score", computerScore);
}

// write logic to play 5 rounds = 1 game
function playGame(
  computerScore,
  humanScore,
  playerSelection,
  computerSelection
) {
  if (computerScore === 5) {
    console.log("Game OVER! Computer WINS");
  } else if (humanScore === 5) {
    console.log("Congrats! You win this time!");
  } else {
    playRound(playerSelection, computerSelection);
  }
}
// change display on game win at 5 rounds to win or lose
// update display on screen scores / images of selected items
