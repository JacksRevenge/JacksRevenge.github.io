export default class Player {
    constructor() {
        this._hp = 50
        this._maxhp = this._hp
        this._armor = "Chain Vest"
        this._weapon = "Dagger"
        this._flasks = 5
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

    takeDamage(amount) {
        this._hp -= amount
        
        if (this._hp <= this._maxhp) {
            this.death()
        }
    }

    death() {
        console.log("Ouch... It seems i overestimated my abilities. Well, goodbye cruel world!")
    }
}