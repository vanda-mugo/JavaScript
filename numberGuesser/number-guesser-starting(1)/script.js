let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};


const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    if(humanGuess === computerGuess){
        return true;
    }
    let humanDiff = Math.abs(secretTarget - humanGuess);
    let compDiff = Math.abs(secretTarget - computerGuesses);

    if(humanDiff < compDiff){
        // means that the human is closer to the actucal value 
        return true;
    }
    return false;
};


const updateScore = (str) => {
    if (str === 'human'){
        humanScore += 1;
    }
    else if(str === 'computer'){
        computerScore += 1;
    }
};


const advanceRound = () => {
    currentRoundNumber += 1;
};


const ans1 = compareGuesses(6, 4, generateTarget());
console.log(ans1);
let valUpdate;
if(ans1 === true){
    valUpdate = 'human';
}
if(ans1 === false){
    valUpdate = 'computer';
}

updateScore(valUpdate);
advanceRound();

console.log(humanScore);
console.log(computerScore);
console.log(currentRoundNumber);

