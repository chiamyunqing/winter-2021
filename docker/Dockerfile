#docker build -t my-app:1.0 <path to dockerfile>

FROM node:13-alpine 

RUN mkdir -p /home/app

COPY ./app /home/app

CMD["node", "/home/app/server.js"]