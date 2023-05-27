import Player from "./player.js"

const player = new Player()
console.log(player._hp)
console.log(player._armor)
console.log(player._weapon)
console.log(player._flasks)

class Game {
    constructor() {
        this.isRunning = true
    }

    startGame() {
        this.isRunning = true
    }

    endGame() {
        this.isRunning = false
    }
}

const game = new Game()