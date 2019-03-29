# LOOPBACK-4

##  DOCKER IMAGE :  docker pull theranjitkumar/loopback4
    https://hub.docker.com/r/theranjitkumar/loopback4

##  User :
    CRUD api => /users

##  Admin :
    CRUD api => /admins

### Dockerfile

    # Check out https://hub.docker.com/_/node to select a new base image
    FROM node:10-slim

    # Set to a non-root built-in user `node`
    USER node

    # Create app directory (with user `node`)
    RUN mkdir -p /home/node/app

    WORKDIR /home/node/app

    # Install app dependencies
    # A wildcard is used to ensure both package.json AND package-lock.json are copied
    # where available (npm@5+)
    COPY --chown=node package*.json ./

    RUN npm install

    # Bundle app source code
    COPY --chown=node . .

    RUN npm run build

    # Bind to all network interfaces so that it can be mapped to the host OS
    ENV HOST=0.0.0.0 PORT=3000

    EXPOSE ${PORT}
    CMD [ "node", "." ]

## Docker commands:
### To build:
    sudo docker build -t (your docker user name)/mynodeapp(this is your docker app name) .
### To run:
    sudo docker run -p 3000:3000 -d (your docker user name)/mynodeapp
### To login Docker
    sudo docker login
### To push
    sudo docker push (your docker user name)/mynodeapp
###    other cmd
    sudo docker ps
    sudo docker image
