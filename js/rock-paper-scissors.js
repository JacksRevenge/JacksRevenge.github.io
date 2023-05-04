// Variables
const rockPaperScissorsTable = {
    "rock": 0,
    "paper": 1,
    "scissors": 2    
}
const form = document.querySelector("form")
const computerOut = document.querySelector("#computerOut")
const scoreTag = document.querySelector("#score")
let score = 0

// Functions
function calculateMove() {
    return Math.floor(Math.random() * 3)
}

function translateMove(value) {
    return Object.keys(rockPaperScissorsTable).find(key => rockPaperScissorsTable[key] === value);
}

function computerResponse(event) {
    event.preventDefault();
    const playerMove = rockPaperScissorsTable[document.querySelector("input").value.toLowerCase()]
    const computerMove = calculateMove()

    computerOut.innerHTML = "MY MOVE IS: " + translateMove(computerMove).toUpperCase()

    switch (computerMove - playerMove) {
        case 0:
            computerOut.innerHTML += "... D.R.A.W"
            break
        case 1:
            computerOut.innerHTML += "... I WIN, I ALWAYS WIN"
            score -= 1
            break
        case 2 :
            computerOut.innerHTML += "... YOU WIN... HOW?"
            score += 1
            break
        case -1:
            computerOut.innerHTML += "... YOU WIN... HOW?"
            score += 1
            break
        case -2:
            computerOut.innerHTML += "... I WIN, I ALWAYS WIN"
            score -= 1
            break
        default:
            computerOut.innerHTML += "... WAIT THAT IS NOT A VALID INPUT"
    }
    scoreTag.innerHTML = "Score:" + score
}

// Simply adding the event listener
form.addEventListener("submit", computerResponse)