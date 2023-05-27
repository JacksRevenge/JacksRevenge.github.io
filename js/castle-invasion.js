import Player from "./player.js"

const player = new Player()
console.log(player.currentHp)
console.log(player.currentArmor)
console.log(player.currentWeapon)
console.log(player.amountOfFlasks)

class Game {
    constructor() {
        this.gameState = 1
    }

    updateGameState(value) {
        this.gameState = value
    }

    evaluateGameState(event) {
        event.preventDefault()
        const action = playerAction.firstElementChild.value.toLowerCase()

        switch (this.gameState) {
            case 0:
                this.endGame()
                break
            case 1:
                this.outsideLevel(action)
                break
            case 2:
                this.insideLevel(action)
                break
        }
    }

    endGame() {
        flavorText.innerHTML = "GAME OVER<br/><br/>Well done!"
    }

    outsideLevel(action) {
        if (action == "enter") {
            flavorText.innerHTML = "Into the storm!<br/>You make your way inside the keep.<br/>A few rays of sunlight break through the ceiling as you find yourself in a circular room."
            playerLocation.innerHTML = "LOCATION: A circular room"
            helpText.innerHTML = "TIP: Good luck!"
            this.gameState = 2
        } else if (action == "exit") {
            flavorText.innerHTML = "Screw the gold, I'm saving my skin!<br/>You turn around and walk into the forest from which you came.<br/> Perhaps it's better this way, you think."
            playerLocation.innerHTML = "LOCATION: A comforting forest"
            helpText.innerHTML = "TIP: You don't have to be the hero!"
            this.gameState = 0
        } else {
            console.log("wut")
        }
    }

    insideLevel(action) {
        console.log(action)
    }
}

const game = new Game()
const playerAction = document.querySelector("form")
const flavorText = document.querySelector("#flavorText")
const playerLocation = document.querySelector("#location")
const helpText = document.querySelector("#help")

playerAction.addEventListener("submit", e => { game.evaluateGameState(e) })