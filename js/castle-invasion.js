import Player from "./player.js"
import Story from "./story-generator.js"

class Game {
    constructor() {
        this.gameState = 1
        this.story = new Story(String(Math.floor(Math.random() * 5)) + String(Math.floor(Math.random() * 5)) + String(Math.floor(Math.random() * 5)) + String(Math.floor(Math.random() * 5)) + String(Math.floor(Math.random() * 5)) + String(Math.floor(Math.random() * 5)))
        this.story.generateIntermissionScene()
        this.player = new Player()
    }

    updateGameState(value) {
        this.gameState = value
    }

    evaluateGameState(event) {
        event.preventDefault()
        const action = playerAction.firstElementChild.value.toLowerCase()
        console.log(action)

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
            case 3:
                this.battleLevel(action)
                break
        }
    }

    endGame() {
        flavorText.innerHTML = "GAME OVER<br/><br/>Well done!"
    }

    outsideLevel(action) {
        if (action == "enter") {
            this.story.generateEntranceScene(0)
            this.gameState = 2
        } else if (action == "exit") {
            this.story.generateExitScene()
            this.gameState = 0
        } else {
            console.log("wut")
        }
    }

    insideLevel(action) {
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

    battleLevel(action) {
        console.log("WAR!! " + action)
    }
}

const game = new Game()
const playerAction = document.querySelector("form")

playerAction.addEventListener("submit", e => { game.evaluateGameState(e) })