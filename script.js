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
            switch (humanChoice) {
                case "paper": console.log("You win! Paper beats rock.");
                    break;
                case "scissors": console.log("You lose! Rock beats scissors.");
                    break;
                case "rock": console.log("Tie! No points awarded.");
                    break;
                default: throw new Error("Invalid humanChoice value: " + humanChoice);
            }
            break;
        case 2:
            console.log("paper");
            break;
        case 3:
            console.log("scissors");
            break;
        default:
            throw new Error("Invalid computerChoice value: " + computerChoice);

    }
}

function playGame() {

}

playRound(getHumanChoice(), getComputerChoice());