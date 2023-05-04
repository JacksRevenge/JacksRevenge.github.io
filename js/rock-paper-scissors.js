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

    computerOut.innerHTML = "my move is: " + translateMove(computerMove).toUpperCase()

    switch (computerMove - playerMove) {
        case 0:
            computerOut.innerHTML += "... draw"
            break
        case 1:
            computerOut.innerHTML += "... I win"
            score -= 1
            break
        case 2 :
            computerOut.innerHTML += "... you win"
            score += 1
            break
        case -1:
            computerOut.innerHTML += "... you win"
            score += 1
            break
        case -2:
            computerOut.innerHTML += "... I win"
            score -= 1
            break
        default:
            computerOut.innerHTML += "... wait that is not a valid input"
    }
    scoreTag.innerHTML = "Score:" + score
}

// Simply adding the event listener
form.addEventListener("submit", computerResponse)