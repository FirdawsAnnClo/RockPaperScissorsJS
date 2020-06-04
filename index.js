var opponentsHandOptions = ["rock", "paper", "scissors"]
var opponentsHand = opponentsHandOptions[Math.floor(Math.random() * opponentsHandOptions.length)];
var opponentWins = 0
var youWin = 0
var draws = 0

function iPlayedRock() {

if (opponentsHand === "rock") {
    draws++
    console.log("draws", draws)
  return "It's a draw"

  } else if (opponentsHand === "paper") {
      opponentWins++
      console.log("opponent wins", opponentWins)
      return "Opponent wins with PAPER"
  } else if (opponentsHand === "scissors") {
      youWin++
      console.log("you win", youWin)
      
      return "Your Hand WINS with ROCK!"
  }
}

function iPlayedPaper() {

  
if (opponentsHand === "paper") {
    draws++
  return "It's a draw"

  } else if (opponentsHand === "scissors") {
      opponentWins++
      return "Opponent wins with scissors"
  } else if (opponentsHand === "rock") {
      youWin++
      return "Your Hand WINS with paper!"
  
  }
 
 }


function iPlayedScissors() {

  
if (opponentsHand === "scissors") {
    draws++
  return "It's a draw"
  } else if (opponentsHand === "rock") {
      opponentWins++
      return "Opponent wins with rock" 
  } else if (opponentsHand === "paper") {
      youWin++
    return "Your Hand WINS with scissors!"
  }
}




function iPlay(yourHand) {

    if (yourHand === "rock") {
        
        var rockResult = iPlayedRock() 

        document.getElementById("result").innerHTML = rockResult

    } else if (yourHand === "paper") {

        var paperResult = iPlayedPaper()
        
        document.getElementById("result").innerHTML = paperResult

    } else if (yourHand === "scissors") {

        
        // var scissorsResult = iPlayedScissors()
        
        document.getElementById("result").innerHTML = iPlayedScissors()
    }

document.getElementById("youWinHtml").innerHTML = youWin
document.getElementById("opponentWinsHtml").innerHTML = opponentWins
document.getElementById("drawsHtml").innerHTML = draws
}


function iPlayRockPaperScissors(yourHandViaClick) {

    opponentsHand = opponentsHandOptions[Math.floor(Math.random() * opponentsHandOptions.length)];
    iPlay(yourHandViaClick)
}
document.getElementById("rock").addEventListener("click", () => iPlayRockPaperScissors("rock"))
document.getElementById("paper").addEventListener("click", () => iPlayRockPaperScissors("paper"))
document.getElementById("scissors").addEventListener("click", () => iPlayRockPaperScissors("scissors"))


function resetScores() {
opponentWins = 0
youWin = 0
draws = 0

document.getElementById("youWinHtml").innerHTML = youWin
document.getElementById("opponentWinsHtml").innerHTML = opponentWins
document.getElementById("drawsHtml").innerHTML = draws

console.log("inside reset scores")

}
document.getElementById("resetScores").addEventListener("mouseenter", resetScores)




