FROM ubuntu:plucky
WORKDIR /main

COPY ./app /main/app
COPY ./public /main/public

COPY ./eslint.config.mjs /main/eslint.config.mjs
COPY ./jsconfig.json /main/jsconfig.json
COPY ./next.config.mjs /main/next.config.mjs

COPY ./package-lock.json /main/package-lock.json
COPY ./package.json /main/package.json

COPY ./postcss.config.mjs /main/postcss.config.mjs
COPY ./tailwind.config.mjs /main/tailwind.config.mjs

COPY ./start.sh /main/start.sh

RUN apt-get update \
    && apt-get install -y \
    nodejs \
    npm \
    curl \  
    && npm install

CMD ["sh", "/main/start.sh"]