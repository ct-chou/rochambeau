function getComputerChoice() {
    // use random number gen, split 1/3 for rock etc
    let randomNumber = Math.random();
    if(randomNumber < 1/3) {
        return "rock";
    }
    else if (randomNumber < 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
    while(1) {
    // error check
        if(playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') {
            return playerChoice;
        }
        else {
            playerChoice = prompt("Invalid input, try again. Rock, paper or scissors?").toLowerCase();
        }
    }
}

function playGameOld(playerSelection, computerSelection) {
    if(playerSelection == 'rock') {
        switch (computerSelection){
            case 'rock':
                return 'draw';
            case 'paper':
                return `you lose! ${computerSelection} beats ${playerSelection}`;
            case 'scissors':
                return `you win! ${playerSelection} beats ${computerSelection}`;
            default:
                break;
        }
    }
    else if(playerSelection == 'paper') {
        switch (computerSelection){
            case 'paper':
                return 'draw';
            case 'scissors':
                return `you lose! ${computerSelection} beats ${playerSelection}`;
            case 'rock':
                return `you win! ${playerSelection} beats ${computerSelection}`;
            default:
                break;
        }
    }
    else if(playerSelection == 'scissors') {
        switch (computerSelection){
            case 'scissors':
                return 'draw';
            case 'rock':
                return `you lose! ${computerSelection} beats ${playerSelection}`;
            case 'paper':
                return `you win! ${playerSelection} beats ${computerSelection}`;
            default:
                break;
        }
    }
}

function playGame(playerSelection, computerSelection) {
    if(playerSelection == 'rock') {
        switch (computerSelection){
            case 'rock':
                return 0;
            case 'paper':
                return -1;
            case 'scissors':
                return 1;
            default:
                break;
        }
    }
    else if(playerSelection == 'paper') {
        switch (computerSelection){
            case 'paper':
                return 0;
            case 'scissors':
                return -1;
            case 'rock':
                return 1;
            default:
                break;
        }
    }
    else if(playerSelection == 'scissors') {
        switch (computerSelection){
            case 'scissors':
                return 0;
            case 'rock':
                return 1;
            case 'paper':
                return -1;
            default:
                break;
        }
    }
}


function game() {
    let draws = 0;
    let wins = 0;
    let losses = 0;

    for(i=0; i<5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice(); 
        
        console.log(`player selects: ${playerSelection}`);
        console.log(`computer selects: ${computerSelection}`);
        roundResult = playGame(playerSelection, computerSelection);
        switch(roundResult) {
            case -1:
                console.log(`you lose! ${computerSelection} beats ${playerSelection}`);
                losses++;
                break;
            case 1:
                console.log(`you win! ${playerSelection} beats ${computerSelection}`);
                wins++;
                break;
            case 0:
                console.log(`draw! you both picked ${playerSelection}`);
                draws++;
                break;
            default:
                throw new RangeError(`unexpected roundResult of ${roundResult}`);
                break;
        }
    }

    console.log(`Final score: ${wins} wins, ${losses} losses, ${draws} draws`);
    if(wins > losses) {
        console.log('you win!');
    }
    else if (wins < losses) {
        console.log('you lose!');
    }
    else {
        console.log('it\'s a draw!');
    }
}
