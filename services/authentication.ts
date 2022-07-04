import { AuthenticationInterface, LogoutInterface, RegisterInterface, UserInterface } from "../interfaces/authentication.interface";
import { Police } from "./police";

export class Authentication implements AuthenticationInterface {
    public login(): string {
        // kita cek user yang punya email xxx@email.com di database

        // email: xxx@email.com, password: 12345, full_name: Joko, full_address: jakarta timur

        // kita cek password user tersebut apakah sama dengan yang dia inputkan

        // kalo bener maka kita kasih sebuah data token
        const token = this.generateToken()

        // kalo salah kita return error
        return ""
    }

    public register(user: UserInterface): RegisterInterface {
        // masukan data-data yang dibutuhkan

        // ada validasi di cek lagi apakah sudah sesuai

        // password dan confirm pass harus sama

        // jika lolos semua, data disimpan
        return {
            message: "sukses create user",
            data: {
                age: 10,
                confirmPassword: "12345",
                email: "xxx@email.com",
                fullName: "Joko",
                password: "12345"
            }
        }
    }

    public logout(): LogoutInterface {
        return {
            message: "sukses logout"
        }
    }

    private generateToken() {

    }
}