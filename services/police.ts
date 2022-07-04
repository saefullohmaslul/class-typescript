import { Human } from "./human";

export class Police extends Human {
    constructor(name: string) {
        super(name)
    }

    save() {
        console.log(super.save())
        //
        //
        //
        //
        //
        return `Polisi menyelamatkan orang`
    }

    shoot() {
        return "Polisi menembak maling"
    }
}

const police = new Police("Andri")

console.log(police.save())
console.log(police.shoot())
console.log(police)