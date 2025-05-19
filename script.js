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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    switch (computerChoice) {
        case 1:
            console.log("rock");
            break;
        case 2:
            console.log("rocks");
            break;
        case 3:
            console.log("rockzzz");
            break;
        default:
            throw new Error("Invalid computerChoice value: " + computerChoice);

    }
}

function playGame() {

}

playRound(getHumanChoice(), getComputerChoice());