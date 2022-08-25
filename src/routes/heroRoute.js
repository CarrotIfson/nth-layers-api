import { once } from 'node:events'
import Hero from '../entities/hero.js';
import { DEFAULT_HEADER } from '../util/util.js';

const routes = ({
    heroService //
}) => ({
    //heroes:get
    '/heroes:get': async (request, response) => {  
        response.write('GET');
        response.end();
    },
    //heroes:post
    '/heroes:post': async (request, response) => {  
        //listen to the event from the request
        const data = await once(request, 'data')
        const item = JSON.parse(data)
        const hero = new Hero(item)
 
        const hero_id = hero.id;
        response.writeHead(201, DEFAULT_HEADER)
        response.write(JSON.stringify({
            hero_id,
            success: 'Hero created successfully!!',
        }));
        return response.end();
    }
})

export { routes }