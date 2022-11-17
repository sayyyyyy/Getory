FROM node:18

RUN mkdir src

RUN npm install -g npm@latest nuxi nuxt3

CMD 'yarn' 'dev'