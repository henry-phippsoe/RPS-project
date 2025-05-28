let humanScore = 0;
let computerScore = 0;

const terminal = document.getElementById("terminal");

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
    return choice;
}

// Takes user input for sign, returns played sign
// function getHumanChoice(choice) {
//     // let choice = prompt("Choose to throw rock, paper, or scissors: ");
//     // return choice;
// }

// Rock paper scissors game logic for one round, for each computer sign, check against human sign to decide victor

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    terminal.appendChild(document.createTextNode("You chose: " + humanChoice));
    terminal.appendChild(document.createElement("br"));
    terminal.appendChild(document.createTextNode("Computer chose: " + computerChoice));
    terminal.appendChild(document.createElement("br"));

    switch (computerChoice) {
        case "rock":
            switch (humanChoice) {
                case "paper": terminal.appendChild(document.createTextNode("You win! Paper beats rock."));
                    terminal.appendChild(document.createElement("br"));
                    humanScore += 1;
                    break;
                case "scissors": terminal.appendChild(document.createTextNode("You lose! Rock beats scissors."));
                    terminal.appendChild(document.createElement("br"));
                    computerScore += 1;
                    break;
                case "rock": terminal.appendChild(document.createTextNode("Tie! No points awarded."));
                    terminal.appendChild(document.createElement("br"));
                    break;
                default: throw new Error("Invalid humanChoice value: " + humanChoice);
            }
            break;
        case "paper":
            switch (humanChoice) {
                case "paper": terminal.appendChild(document.createTextNode("Tie! No points awarded."));
                    terminal.appendChild(document.createElement("br"));
                    break;
                case "scissors": terminal.appendChild(document.createTextNode("You win! Scissors beats paper."));
                    terminal.appendChild(document.createElement("br"));
                    humanScore += 1;
                    break;
                case "rock": terminal.appendChild(document.createTextNode("You lose! Paper beats rock."));
                    terminal.appendChild(document.createElement("br"));
                    computerScore += 1;
                    break;
                default: throw new Error("Invalid humanChoice value: " + humanChoice);
            }
            break;
        case "scissors":
            switch (humanChoice) {
                case "paper": terminal.appendChild(document.createTextNode("You lose! Scissors beats paper."));
                    terminal.appendChild(document.createElement("br"));
                    computerScore += 1;
                    break;
                case "scissors": terminal.appendChild(document.createTextNode("Tie! No points awarded."));
                    terminal.appendChild(document.createElement("br"));
                    break;
                case "rock": terminal.appendChild(document.createTextNode("You win! Rock beats scissors."));
                    terminal.appendChild(document.createElement("br"));
                    humanScore += 1;
                    break;
                default: throw new Error("Invalid humanChoice value: " + humanChoice);
            }
            break;
        default: throw new Error("Invalid computerChoice value: " + computerChoice);
    }
    terminal.appendChild(document.createTextNode(`Score, H: ${humanScore} C: ${computerScore}`));
    terminal.appendChild(document.createElement("br"));
    terminal.appendChild(document.createElement("br"));

    if (humanScore == 5) {
        terminal.appendChild(document.createTextNode(`YOU WIN!!! ${humanScore}-${computerScore}`));
        humanScore = 0;
        computerScore = 0;
        terminal.appendChild(document.createElement("br"));
        terminal.appendChild(document.createElement("br"));
    }
    else if (computerScore == 5) {
        terminal.appendChild(document.createTextNode(`YOU LOSE... ${humanScore}-${computerScore}`));
        humanScore = 0;
        computerScore = 0;
        terminal.appendChild(document.createElement("br"));
        terminal.appendChild(document.createElement("br"));
    }
    
}

// Rock paper scissors logic for a 5 round game, displays victory message and resets scoreboard
// function playGame() {
//     for (i = 0; i < 5; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     if (humanScore > computerScore) {
//         console.log("You win!")
//     }
//     else {
//         console.log("You lose!")
//     }

//     console.log("You: " + humanScore + " Computer: " + computerScore);
//     humanScore = 0;
//     computerScore = 0;
// }

// playGame();
