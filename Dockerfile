FROM node:18.16.0-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .
RUN yarn build

EXPOSE 80
ENTRYPOINT ["yarn", "preview", "--port", "80"]