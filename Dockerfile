FROM node:16.17-alpine

WORKDIR /opt/alertin

ENV PORT=8080
ENV ALERTIN_ID=ChangeMe
ENV TOKEN=ChangeMe
ENV CHANNEL=ChangeMe

COPY package*.json ./

COPY . .

RUN npm install

RUN npm prune --production

# EXPOSE ${PORT} ${PORT_ADMIN}

RUN echo port=${PORT} > /opt/alertin/.env && echo port_admin=${PORT_ADMIN} >> /opt/alertin/.env && echo token=${TOKEN} >> /opt/alertin/.env && echo channel=${CHANNEL} >> /opt/alertin/.env

ENTRYPOINT node /opt/alertin/src/index.js
