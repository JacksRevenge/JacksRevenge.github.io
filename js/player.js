export default class Player {
    constructor() {
        this.currentHp = 50
        this.maxHp = this.currentHp
        this.currentArmor = "Chain Vest"
        this.currentWeapon = "Dagger"
        this.amountOfFlasks = 5
    }

    getCurrentHp() {
        return this.currentHp
    }
    
    getCurrentArmor() {
        return this.currentArmor
    }

    getCurrentWeapon() {
        return this.currentWeapon
    }
    
    getAmountOfFlasks() {
        return this.amountOfFlasks
    }

    takeDamage(amount) {
        this.currentHp -= amount

        if (this.currentHp <= this.maxHp) {
            this.playerDeath()
        }
    }

    playerDeath() {
        console.log("Ouch... It seems i overestimated my abilities. Well, goodbye cruel world!")
    }
}