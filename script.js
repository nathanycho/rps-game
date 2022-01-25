// Script for Rock Paper Scissor game
const weapon = ["Rock", "Paper", "Scissors"];

// Randomly selects R P or S
function computerPlay () {
    return weapon[Math.floor(Math.random() * weapon.length)];
}

// Returns winning result
function playRound(playerSelection, computerSelection) {
    if (weapon.includes(playerSelection) == false) {
        return "error";
    }
    else if (playerSelection === computerSelection) {
        return "tie";
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Paper') 
            || (playerSelection === 'Paper' && computerSelection === 'Scissors')
            || (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        return "lose";
    }
    else {
        return "win";
    }
}

// Function runs 5 games
function game() {
    let i = 0;
    let winCount = 0;
    let loseCount = 0;
    while (i < 5) {
        const input = prompt("Choose your weapon!");
        const playerSelection = input.substr(0,1).toUpperCase() + input.substr(1).toLowerCase();
        const computerSelection = computerPlay();

        result = playRound(playerSelection, computerSelection);

        if (result === "error") {
            console.log(`Invalid input. Please try again.`);
        }
        else if (result === "tie") {
            console.log(`It's a tie! You both played ${playerSelection}.`);
            i++;
        }
        else if (result === "lose") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
            i++;
            loseCount++;
        }
        else {
            console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
            i++;
            winCount++;
        }
        console.log(`Score: ${winCount} - ${loseCount}.`);
    }
    if (winCount > loseCount) {
        console.log('You won!');
    }
    else if (winCount < loseCount) {
        console.log('You lost!');
    }
    else {
        console.log('You tied!');
    }
}


