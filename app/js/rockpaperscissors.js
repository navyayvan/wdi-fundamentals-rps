////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move;
if (typeof(move) == null || undefined ) {
  return getInput();
  else {
    return { move
    }
  }
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`
}

function getComputerMove(move) {

     var move;
if (typeof(move) == null || undefined ) {
  return randomPlay();
  else {
    return { move
    }
  }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.;
}

function getWinner(playerMove,computerMove)
// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

 { var winner;
        if (playerMove === computerMove) {
            return "tie";
        }

        else if (playerMove === "rock") {
            if (computerMove === "scissors") {
                return "player"
            }
            else {
                return "computer"
            }
        }

        else if (playerMove === "paper") {
            if (computerMove === "rock") {
                return "player"
            }
            else {
                return "computer"
            }
        }
        else if (playerMove === "scissors") {
            if (computerMove === "paper") :
                return "player"
            else {
                return "computer"
            }
        }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    	for (i = 0, i < 5, i += 1) {
    		getWinner()
    		console.log (playerWins)
    		console.log (computerWins)
    	}
    
    return [playerWins, computerWins];
}

