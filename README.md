## Start the containers :
```
docker-compose up -d
```

## Go into the node container :
```
docker exec -it devenv-formation-nest_node_1 bash
```


## Install the dependencies :
```
npm install
```


## Start the server :
```
npm run start:dev
```

## Addresses :

- Nest : http://localhost:3000
- Playground : http://localhost:3000/graphql
- MongoExpress : http://localhost:8081