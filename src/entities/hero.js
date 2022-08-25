import { randomUUID } from 'node:crypto'

export default class Hero {
    constructor({ name, age, title}) {
        this.id = randomUUID()
        this.name = name
        this.age = age
        this.title = title
    }
}