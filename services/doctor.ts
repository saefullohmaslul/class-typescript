import { Human } from "./human";

class Doctor extends Human {
    constructor(name: string) {
        super(name)
    }
}

const doctor = new Doctor("Agung")

console.log(doctor.save())