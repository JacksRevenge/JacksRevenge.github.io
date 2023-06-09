import Player from "./player.js"
import Story from "./story-generator.js"

class Game {
    constructor() {
        this.gameState = 1
        this.story = new Story(Math.floor(Math.random() * (999999 - 100000) + 100000))
        this.story.generateIntermissionScene()
        this.player = new Player()
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
            this.story.generateEntranceScene()
            this.gameState = 2
        } else if (action == "exit") {
            this.story.generateExitScene()
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