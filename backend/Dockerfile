FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5000

RUN npm install -g nodemon

CMD ["nodemon", "server.js"]
