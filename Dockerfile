FROM node:17.2.0

WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 9000

CMD [ "npm", "start" ]