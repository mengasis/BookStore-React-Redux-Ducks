FROM mhart/alpine-node:latest
LABEL maintainer = 'Manuel Venegas <mengasis@outlook.com>'

RUN mkdir -p /home/app && apk add yarn
WORKDIR /home/app

COPY package.json ./
RUN yarn install

COPY . .

EXPOSE 3000
CMD ["yarn", "start"]