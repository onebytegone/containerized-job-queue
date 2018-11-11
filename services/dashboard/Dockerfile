FROM node:8.12.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 4567
CMD [ "npm", "start" ]
