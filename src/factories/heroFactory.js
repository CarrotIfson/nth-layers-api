import HeroRepository from "../repositories/heroRepository.js"
import HeroService from "../services/heroService.js"

const generateInstance = ({
    filePath
}) => {
    // db connections
    const heroRepository = new HeroRepository({
        file: filePath
    })
    console.log(heroRepository);
    const heroService = new HeroService({
        heroRepository
    })

    return heroService
}

export {
    generateInstance
}