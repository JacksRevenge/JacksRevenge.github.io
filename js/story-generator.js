export default class Story {
    constructor(seed) {
        this.seed = seed
        this.sizeSeed = Number(String(seed)[0])
        this.stateSeed = Number(String(seed)[1])
        this.castleSeed = Number(String(seed)[2])
        this.roomSeed = String(seed).slice(3,5)
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

        this.roomType = {
            0: "circular",
            1: "square",
            2: "tall",
            3: "unusual",
            4: "crumbled"}
        
        this.roomFlavour = {
            0: "Embers radiate a faint light along the walls",
            1: "A creeping darkness covers the corners",
            2: "Some beautiful chandeliers light your path",
            3: '"How is this area even lit?", you ponder',
            4: "A few rays of sunlight break through the ceiling"}
    }

    generateIntermissionScene() {
        const generatedCastle = `${this.size[this.sizeSeed]}, ${this.state[this.stateSeed]}, ${this.castleType[this.castleSeed]}`
        flavorText.innerHTML = `You stand before ${generatedCastle}; the gate still intact.<br/> You look at the quest pamphlet...<br/>"Yep, this is the place."`
        playerLocation.innerHTML = `LOCATION: ${generatedCastle}`
        helpText.innerHTML = `TIP: Type 'enter' or 'exit' to either begin your quest, or abandon it`
    }

    generateEntranceScene() {
        const generatedRoom = `${this.size[this.sizeSeed]} ${this.roomType[this.roomSeed[0]]} room`
        flavorText.innerHTML = `Into the storm!<br/>You make your way inside the keep.<br/>${this.roomFlavour[this.stateSeed]} as you find yourself in  ${generatedRoom}`,
        playerLocation.innerHTML = `LOCATION: ${generatedRoom}`,
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