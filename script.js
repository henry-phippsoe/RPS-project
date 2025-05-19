let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log("Computer chose: " + choice);
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Choose to throw rock, paper, or scissors: ");
    console.log("You chose: " + choice);
    return choice;
}

function playRound() {
    
}

function playGame() {

}

getComputerChoice();
getHumanChoice();