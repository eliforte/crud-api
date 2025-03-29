FROM node:22.14.0-alpine

RUN apk --no-cache add netcat-openbsd wget \
  && wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for \
  && chmod +x /usr/bin/wait-for

RUN npm i -g @nestjs/cli

WORKDIR /usr/app

COPY ../../package.json .
RUN npm i

COPY ../../ .

EXPOSE 3001