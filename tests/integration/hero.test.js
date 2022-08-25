import test from 'node:test'
import assert from 'node:assert'
import { promisify } from 'node:util'

test("Hero Integration Test Suite", async(t) => {
    const testPort = 1337;

    //bad practice -> it mutates the env
    process.env.PORT = testPort
    //import server
    const { server } = await import('../../src/index.js')

    const testServerAddress = `http://localhost:${testPort}/heroes`    
    await t.test('it should create a hero', async(t) => {
        const data = {
            "name": "Bilbo Baggins",
            "age": 111,
            "title": "Ring Finder"
        }

        const request = await fetch(testServerAddress, {
            method: 'POST',
            body: JSON.stringify(data)
            }
        )

        assert.deepStrictEqual(
            request.headers.get('content-type'),
            'application/json'
        )

        assert.strictEqual(request.status, 201)
      
        const result = await request.json()
        assert.deepStrictEqual(
            result.success,
            'Hero created successfully!!',
            'it should return a valid text message'
        ) 
        assert.ok(
            result.hero_id.length > 30,
            'id should be a valid uuid'
        )
        
    })

    //need to close server or else we block the tests
    //server.close() receives a callback  
    await promisify(server.close.bind(server))()
    //bind is used to make sure the internal this, on the close function wont be missed
})