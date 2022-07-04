class People {
    protected name: string = ''
    protected age: number = 0
    private api: string

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.api = "api.jne.co.id?username=xxx&pass=yyy"
    }

    getAge() {
        return this.age
    }

    getName() {
        this.getApi()
        return this.name
    }

    protected getApi() {
        return this.api
    }
}

export {
    People
}
