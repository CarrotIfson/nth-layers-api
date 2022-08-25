import http from 'node:http'
import handler from './handler.js'

const PORT = process.env.PORT || 3000

const server = http.createServer(handler)
    .listen(PORT, () => console.log(`server running at ${PORT}`))

export {
    server
}


https://www.youtube.com/watch?v=xR4D2bp8_S0
34.39