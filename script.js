let humanScore = 0;
let computerScore = 0;

// Gets random value from 1-3 in correspondence to signs, returns played sign
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
        default:
            throw new Error("Invalid computerChoice value: " + choice);
    }
    // console.log(choice);
    // TESTER
    return choice;
}

// Takes user input for sign, returns played sign
function getHumanChoice() {
    let choice = prompt("Choose to throw rock, paper, or scissors: ");
    // console.log(choice);
    // TESTER
    return choice;
}

// Rock paper scissors game logic for one round, for each computer sign, check against human sign to decide victor
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    // console.log(humanScore);
    // console.log(computerScore);
    // TESTER

    switch (computerChoice) {
        case "rock":
            switch (humanChoice) {
                case "paper": console.log("You win! Paper beats rock.");
                    humanScore += 1;
                    break;
                case "scissors": console.log("You lose! Rock beats scissors.");
                    computerScore += 1;
                    break;
                case "rock": console.log("Tie! No points awarded.");
                    break;
                default: throw new Error("Invalid humanChoice value: " + humanChoice);
            }
            break;
        case "paper":
            switch (humanChoice) {
                case "paper": console.log("Tie! No points awarded.");
                    break;
                case "scissors": console.log("You win! Scissors beats paper.");
                    humanScore += 1;
                    break;
                case "rock": console.log("You lose! Paper beats rock.");
                    computerScore += 1;
                    break;
                default: throw new Error("Invalid humanChoice value: " + humanChoice);
            }
            break;
        case "scissors":
            switch (humanChoice) {
                case "paper": console.log("You lose! Scissors beats paper.");
                    computerScore += 1;
                    break;
                case "scissors": console.log("Tie! No points awarded.");
                    break;
                case "rock": console.log("You win! Rock beats scissors.");
                    humanScore += 1;
                    break;
                default: throw new Error("Invalid humanChoice value: " + humanChoice);
            }
            break;
        default: throw new Error("Invalid computerChoice value: " + computerChoice);
    }
}

// Rock paper scissors logic for a 5 round game, displays victory message and resets scoreboard
function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log("You win!")
    }
    else {
        console.log("You lose!")
    }

    console.log("You: " + humanScore + " Computer: " + computerScore);
    humanScore = 0;
    computerScore = 0;
}

playGame();
