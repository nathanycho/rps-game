// Game Code
const weapon = ["Rock", "Paper", "Scissors"];

let winCount = 0;
let loseCount = 0;
let roundResult = "";

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult = "tie";
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Paper') 
            || (playerSelection === 'Paper' && computerSelection === 'Scissors')
            || (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        roundResult = "lose";
        loseCount++;
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') 
    || (playerSelection === 'Paper' && computerSelection === 'Rock')
    || (playerSelection === 'Scissors' && computerSelection === 'Paper')){
        roundResult = "win";
        winCount++;
    }

    updateScore(roundResult, winCount, loseCount, playerSelection, computerSelection);
}

function computerPlay () {
    return weapon[Math.floor(Math.random() * weapon.length)];
}


// UI
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        onClick(button.id);
    });
});

const roundInfo = document.getElementById('round-info');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

function onClick(playerSelection) {
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  
    if (winCount === 5 || loseCount === 5) {
        gameOver((winCount > loseCount));
        return
    }
}

function updateScore (roundResult, winCount, loseCount, playerSelection, computerSelection) {
    if (roundResult === "tie") {
        roundInfo.textContent = `It's a tie! You both played ${playerSelection}.`;
    }
    else if (roundResult === "lose") {
        roundInfo.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
    else if (roundResult === "win") {
        roundInfo.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    }

    playerScore.textContent = `You: ${winCount}`;
    computerScore.textContent = `Computer: ${loseCount}`;
}

function gameOver (win) {
    if (win) {
        roundInfo.textContent = 'Game over - YOU WIN!';
    }
    else {
        roundInfo.textContent = 'Game over - YOU LOSE!';
    }
    winCount = 0;
    loseCount = 0;
}