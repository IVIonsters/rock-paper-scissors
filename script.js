//Grab button elements
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

//Event listeners for choice buttons
rock.addEventListener("click", function () {
  console.log("rock selected");
});

paper.addEventListener("click", function () {
  console.log("paper selected");
});

scissors.addEventListener("click", function () {
  console.log("scissors selected");
});
