# simple-nodejs
Just a basic native nodejs project to test n-layers architecture 

database   
    - 
src                 --all source code
    - entities      --object mappins
    - factories     --instance gens
    - repositories  --data access
    - routes        --endpoint mappings
    - services      --communication routes-repositories layers (business logic)
    - util          --shared code
    - handler       --communication routes-server
    - index.js      --server instances

tests               --all test suites
    - integration   --e2e(no app)/tests on users point of view 
    - unit tests    --tests without external connections (db, fileSystem, external APIs)


notes:
    - add to package.json
        "type": "module"