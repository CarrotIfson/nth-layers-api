import {
    readFile,
    writeFile
} from 'node:fs/promises'

export default class HeroRepository {
    constructor({
        file
    }) {
        this.file = file
    }

    async #currentFileContent() { 
        return JSON.parse(await readFile((this.file)))
    }

    getAllHeroes() {
        return this.#currentFileContent() 
    }

    async create(data) {
        console.log('HeroRepository: create') 
        const {hero, i} = await this.findByName(data.name) 
        if (hero != undefined )
            return hero.id
        const currentFile = await this.#currentFileContent()
        currentFile.push(data)
        await writeFile(
            this.file,
            JSON.stringify(currentFile)
        )

        return data.id
    }  
    async findByName(data) {
        console.log("findByName")
        const heroes = await this.getAllHeroes(); 
        for (const i in heroes) {   
            if (heroes[i].name.toLowerCase() == data.toLowerCase()) {
                console.log('found')
                return {hero:heroes[i], i}
            }
        } 
        return {undefined, undefined}
    } 

    async deleteByName(data) {
        console.log("deleteByName")
        const {hero, i} = await this.findByName(data)
        if (i != undefined) {
            const currentFile = await this.#currentFileContent()
            currentFile.splice(i,1)
            await writeFile(
                this.file,
                JSON.stringify(currentFile)
            )
            return 1
        }
        return -1
    }
 
}

/* TEST  */
/*
const hr = new HeroRepository({
    file: './database/data.json'
})

console.log(
    await hr.create({
        id: 2,
        name: "Samwise",
        age: 38,
        title: "the Brave"
    })
)
 
 
console.log(await hr.getAllHeroes())
console.log( await hr.deleteByName("Samwise")) 
console.log(await hr.getAllHeroes())
*/