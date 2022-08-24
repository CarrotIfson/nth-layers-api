import test from 'node:test'
import assert from 'node:assert'
import { promisify } from 'node:util'

test("Hero Integration Test Suite", async(t) => {
    const testPort = 1337;

    //bad practice
    process.env.PORT = testPort
    //import server
    const { server } = await import('../../src/index.js')

    const testServerAddress = `http://localhost:${testPort}/heroees`    
    await t.todo('it should create a hero', async(t) => {
        const data = {
            "name": "Bilbo",
            "age": 111,
            "title": "Ring Finder"
        }

        fetch
    })

    //need to close server or else we block the tests
    //server.close() is a closure  
    await promisify(server.close.bind(server))()
    //bind is used to make sure the internal this, on the close function wont be missed
})