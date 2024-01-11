# Simple react app
## Develop
### Build:
```sh
docker compose up --build
```
### Volumes
In developer mode we use volumes to make work easier, ann apply changes immediately.


### Tests
#### This approach
In this approach we decided to code test inside docker-compose.

##### Benefits:
- Easy defined in docker-compose.yaml (No need to use many flags by using docker cli)
- Always start in developer mode, so all changes will immediately be apply to test
- Start always 

##### Downside
- No easy access to test runner (cli tools to run tests)
- Start always

#### Other approach
We can simply start developer env, and execute sh inside container and run test manually.

## Production

### Build 
```sh
docker build .
```

### Run 
```sh
docker run -p 8080:80 <docker_id>
```