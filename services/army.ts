import { Human } from "./human";

class Army extends Human {
    constructor(name: string) {
        super(name)
    }

    save() {
        return "Army menyelamatkan rakyat"
    }

    shoot() {
        return "Tentara menembak musuh"
    }
}

const army = new Army("Rini")

console.log(army.save())
console.log(army.shoot())