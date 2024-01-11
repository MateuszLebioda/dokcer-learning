## Use as parent Image, Image with installed node in version 20
FROM node:20-alpine

## Specify workdir of project. Without it we will get node error:
## npm ERR! Tracker "idealTree" already exists
## https://stackoverflow.com/questions/57534295/npm-err-tracker-idealtree-already-exists-while-creating-the-docker-image-for\
## Afetr this command context inside conteiner will be set to /usr/app
WORKDIR /usr/app

## This is used in performance. Without this line every single time we change code, when we want to build new image npm install will be run. Even we does not add remove dependencies. If we put line like this npm install will be run only if docker see changes in package.json
COPY ./package.json ./
RUN npm install

## Copy build context to working directory inside image
COPY ./ ./
CMD ["npm","start"]