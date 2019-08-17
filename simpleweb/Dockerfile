FROM alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN apk add --update npm
RUN npm install

COPY ./ ./

CMD ["npm", "start"]
