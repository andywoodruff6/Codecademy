let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target) {
    humanError = Math.abs(target-humanGuess);
    compError  = Math.abs(target-computerGuess);

    if(humanError === compError) {
        return true;
    } else if (humanError < compError) {
        return true;
    } else {
        return false;
    }
}

function updateScore(a) {
    if(a === 'human') {
        humanScore ++;
    } else {
        computerScore ++;
    }
}

function advanceRound() {
    currentRoundNumber ++;
}