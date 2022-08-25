export default class HeroService {
    constructor({ heroRepository }) {
        this.heroRepository = heroRepository
    }

    getAllHeroes() {
        return this.heroRepository.getAllHeroes()
    }
    
    findByName(heroName) {
        return this.heroRepository.findByName(heroName.toLowerCase())
    }

    create(data) {
        return this.heroRepository.create(data)
    }
}