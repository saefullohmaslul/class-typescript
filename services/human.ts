import { Authentication } from "./authentication"

export class Human extends Authentication {
    public name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    save() {
        return "Penyelamat"
    }
}