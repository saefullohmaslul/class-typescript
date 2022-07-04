export interface LogoutInterface {
    message: string
}

export interface UserInterface {
    fullName: string
    age?: number
    email: string
    password: string
    confirmPassword: string
}

export interface RegisterInterface {
    message: string
    data: UserInterface
}

export interface AuthenticationInterface  {
    /**
     * Method login digunakan untuk login user
     * Dia tidak membutuhkan parameter
     * Akan mereturn token dengan tipe string
     */
    login(): string

    logout(): LogoutInterface

    register(user: UserInterface): RegisterInterface
}