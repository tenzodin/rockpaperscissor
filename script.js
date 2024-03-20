function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}



function playRound(playerSelection) {
    const computerChoice = getComputerChoice().toLowerCase();
    const playerChoice = playerSelection.toLowerCase();
    console.log(`You chose: ${playerChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    if (playerChoice === computerChoice) {
        return `It's a tie! Both players chose ${playerChoice}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return `You win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
    } else {
        return `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}`;
    }
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const playerSelection = prompt("Choose Rock, Paper, or Scissors:"); 
console.log(playRound(playerSelection));