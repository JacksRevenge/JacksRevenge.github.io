export default class Player {
    constructor() {
        this.currentHp = 50
        this.maxHp = this.currentHp
        this.currentArmor = "Chain Vest"
        this.currentWeapon = "Dagger"
        this.amountOfFlasks = 5
    }

    hp() {
        return this.currentHp
    }
    
    armor() {
        return this.currentArmor
    }

    weapon() {
        return this.currentWeapon
    }
    
    flasks() {
        return this.amountOfFlasks
    }

    takeDamage(amount) {
        this.currentHp -= amount

        if (this.currentHp <= this.maxHp) {
            this.death()
        }
    }

    death() {
        console.log("Ouch... It seems i overestimated my abilities. Well, goodbye cruel world!")
    }
}