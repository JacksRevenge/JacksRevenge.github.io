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
        console.log("--End Game--")
    }

    outsideLevel(action) {
        if (action == "enter") {
            console.log("Into the storm!")
            this.gameState = 2
        } else if (action == "exit") {
            console.log("Screw the gold, I'm saving my skin!")
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

playerAction.addEventListener("submit", e => { game.evaluateGameState(e) })