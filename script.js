//Grab button elements
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

//Event listeners for choice buttons
rock.addEventListener("click", function () {
  getHumanChoice("rock");
});

paper.addEventListener("click", function () {
  getHumanChoice("paper");
});

scissors.addEventListener("click", function () {
  getHumanChoice("scissors");
});

// write function to get computer choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  //generate array index
  const randomIndex = Math.floor(Math.random() * choices.length);

  let randomComputerChoice = choices[randomIndex];
  console.log("Computer Selects", randomComputerChoice);
}

// write function to get human choice
function getHumanChoice(choice) {
  console.log("Human Selects", choice);
  getComputerChoice();
}

// create player variable score function

// write logic to play a single round

// write logic to play 5 rounds = 1 game
