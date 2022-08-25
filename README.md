# simple-nodejs
Just a basic native nodejs project to test n-layers architecture 

src                 --all source code
    - entities      --object mappins
    - factories     --instance gens
    - repositories  --data access
    - routes        --endpoint mappings
    - services      --communication routes-repository layers (business logic)
    - util          --shared code
    - handler       --communication routes-server
    - index.js      --server instances
    - database   
    

tests               --all test suites
    - integration   --e2e(no app)/tests on users point of view 
    - unit tests    --tests without external connections (db, fileSystem, external APIs)


notes:
    - add to package.json
        "type": "module"