FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install nodemon -g
RUN npm install
COPY . .
EXPOSE 5000

CMD [ "npm","run", "server" ]