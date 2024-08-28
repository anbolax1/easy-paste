FROM node:18

WORKDIR /app

COPY package*.json package-lock.json ./

RUN npm install

COPY . .

RUN cp .env.example .env

EXPOSE 3000

CMD \[ -d "node_modules" \] && npm run start || npm ci && npm run start
