let userScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[~~(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

// Tie
if (playerSelection === computerSelection) {
    alert ('Its a tie! Play again')
}

else if (playerSelection === 'paper' && computerSelection === 'rock') {
    userScore++;
    alert ('You win! Paper beats Rock')
}

else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    userScore++;
    alert ('You win! Rock beats Scissors')
}

else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    userScore++;
    alert ('You win! Scissors beat Paper')
}

else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    alert ('You lose! Paper beats Rock')
}

else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    alert ('You lose! Scissors beat Paper')
}

else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    alert ('You lose! Scissors beat Rock')
}

}

// game function plays 5 rounds and returns a winner
function game() {
    for (let i =1; i <=5; i++){
    console.log("Round #" + i)
    playRound(i);
    }
}

console.log ("Game over")
if(userScore > computerScore) {
    console.log("Player wins")
} else if (userScore === computerScore) {
    console.log ("Tie")
} else {
    console.log("Computer Wins");
  }


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))


