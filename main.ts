import { People } from "./services/people"

class Saeful extends People {
    public hobbies:Array<String> = []

    constructor(name: string, age: number, hobby: string) {
        super(name, age)
        this.hobbies.push(hobby)
    }

    public addHobbies(hobby: string) {
        this.hobbies.push(hobby)
    }

    public getBio() {
        return `Halo nama saya ${this.name} dan saya umur ${this.age}`
    }

    public getHobbies() {
        this.getApi()
        return this.hobbies
    }
}

const saeful = new Saeful("Saefulloh Maslul", 24, "Makan")

console.log(saeful.getAge())
console.log(saeful.getName())
console.log(saeful.getHobbies())

class Budi extends Saeful {
    constructor(name: string, age: number, hobby: string) {
        super(name, age, hobby)
    }
}

const budi = new Budi("Budi Doremi", 30, "Sepak Bola")

console.log(budi.getName())
console.log(budi.getBio())
console.log(budi.getHobbies())