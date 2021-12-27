## create docker network
docker network create mongo-network

## start mongodb
docker run -d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \ 
-e MONGO_INITDB_ROOT_PASSWORD=secret \
--net mongo-network
--name mongodb \ //container name
mongo //image name

## start mongo-express (mongoUI)
docker run -d \
-p 8081:8081
-e ME_CONFIG_MONGODB_ADMINUSERNAME=mongoadmin
-e ME_CONFIG_MONGODB_ADMINPASSWORD=secret \
-e ME_CONFIG_MONGODB_SERVER=mongodb \ //mongo container name
--net mongo-network
--name mongo-express \
mongo-express
