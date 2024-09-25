FROM node:21-bullseye-slim

RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

COPY . .

RUN npm i

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]