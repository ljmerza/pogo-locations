FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .
# ENV DB_HOST=${DB_HOST}
# ENV DB_USERNAME=${DB_USERNAME}
# ENV DB_PASSWORD=${DB_PASSWORD}
# ENV DB_DATABASE=${DB_DATABASE}
# ENV PORT=${PORT}

# EXPOSE ${PORT}
CMD [ "npm", "start" ]