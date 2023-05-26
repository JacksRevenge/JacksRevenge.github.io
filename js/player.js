export default class Player {
    constructor() {
        this.hp = 50
        this.armor = "Chain Vest"
        this.weapon = "Dagger"
        this.flasks = 5
    }

    hp() {
        return this.hp
    }

    weapon() {
        return this.weapon
    }

    armor() {
        return this.armor
    }

    flasks() {
        return this.flasks
    }
}