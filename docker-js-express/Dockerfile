FROM node:alpine

WORKDIR /usr/app

#Main service (Node) can read env vars without this. This is only needed on other services (database client).
#V1 - Hardcoded way of passing environment vars to Docker:
# ENV SERVER_PORT=4000
#V2 - Passing entire .env file in the docker run option: "--env-file .env"

#Expose the container port, but does not publish it to a host port.
#Have to use the docker run option "--publish host_port:container_port" like: "-p 4000:4000"
# EXPOSE 4000 

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start:dev" ]
