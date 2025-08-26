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
  playRound(playerSelection, computerSelection);
});

paper.addEventListener("click", function () {
  let playerSelection = getHumanChoice("paper");
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

scissors.addEventListener("click", function () {
  let playerSelection = getHumanChoice("scissors");
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
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
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Sorry Mate you lose this one!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Sorry Mate you lose this one!");
  } else {
    console.log("Congrats! You win this round!");
  }
}

// write logic to play 5 rounds = 1 game
