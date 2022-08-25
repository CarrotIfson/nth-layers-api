import { once } from 'node:events'
import Hero from '../entities/hero.js';
import { DEFAULT_HEADER } from '../util/util.js';

const routes = ({
    heroService //
}) => ({
    //heroes:get
    '/heroes:get': async (request, response) => {   
        const heroes = await heroService.getAllHeroes()
        response.write(JSON.stringify({
            result: heroes,
        })); 
        return response.end();
    },
    //heroes:post
    '/heroes:post': async (request, response) => {  
        //listen to the event from the request  
        const data = await once(request, 'data')
        const item = JSON.parse(data) 
        const hero = new Hero(item)  
        const hero_id = await heroService.create(hero) 
        response.writeHead(201, DEFAULT_HEADER)
        response.write(JSON.stringify({
            hero_id,
            success: 'Hero created successfully!!',
        }));
        return response.end();
    },
    //findhero:post  
    '/findhero:post': async (request, response) => {  
        //listen to the event from the request  
        const data = await once(request, 'data')
        const item = JSON.parse(data) 
        const h = await heroService.findByName(item.name)
        response.writeHead(201, DEFAULT_HEADER)
        response.write(JSON.stringify({
            result: h,
            success: 'Hero found successfully!!',
        })); 
        return response.end();
    } 
    
})

export { routes }