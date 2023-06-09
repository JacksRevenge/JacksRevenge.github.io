export default class Story {
    constructor(seed) {
        this.seed = seed
        this.sizeSeed = Number(String(seed)[0])
        this.stateSeed = Number(String(seed)[1])
        this.castleSeed = Number(String(seed)[2])
        console.log("seed " + this.seed)

        this.size = {
            0: "a colossal",
            1: "a massive",
            2: "an average",
            3: "a small",
            4: "a tiny"}
        
        this.state = {
            0: "smoldering",
            1: "overgrown",
            2: "well-kept",
            3: "war-torn",
            4: "ruinous"}
        
        this.castleType = {
            0: "citadel",
            1: "fort",
            2: "castle",
            3: "keep",
            4: "holdout"}

    }

    generateIntermissionScene() {
        const generatedCastle = `${this.size[this.sizeSeed % 5]}, ${this.state[this.stateSeed % 5]}, ${this.castleType[this.castleSeed % 5]}`
        flavorText.innerHTML = `You stand before ${generatedCastle}; the gate still intact.<br/> You look at the quest pamphlet...<br/>"Yep, this is the place."`
        playerLocation.innerHTML = `LOCATION: ${generatedCastle}`
        helpText.innerHTML = `TIP: Type 'enter' or 'exit' to either begin your quest, or abandon it`
    }

    generateEntranceScene() {
        flavorText.innerHTML = "Into the storm!<br/>You make your way inside the keep.<br/>A few rays of sunlight break through the ceiling as you find yourself in a circular room.",
        playerLocation.innerHTML = "LOCATION: A circular room",
        helpText.innerHTML = "TIP: Good luck!"
    }
    
    generateExitScene() {
        flavorText.innerHTML = "Screw the gold, I'm saving my skin!<br/>You turn around and walk into the forest from which you came.<br/> Perhaps it's better this way, you think."
        playerLocation.innerHTML = "LOCATION: A comforting forest"
        helpText.innerHTML = "TIP: You don't have to be the hero!"
    }
}

const flavorText = document.querySelector("#flavorText")
const playerLocation = document.querySelector("#location")
const helpText = document.querySelector("#help")

// flavorText.innerHTML =
// playerLocation.innerHTML = 
// helpText.innerHTML = 