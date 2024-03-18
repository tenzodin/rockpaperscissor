/**function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}*/



function playRound(playerSelection, computerSelection) {

    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return `It's a tie! Both players chose ${playerChoice}`;
    }

    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}`
    }
    else {
        return `You lose! ${computerChoice} beats ${playerChoice}`
    }
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const playerSelection = "Rock";
const computerSelection = "Scissor";
console.log(playRound(playerSelection, computerSelection));