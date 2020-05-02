FROM node:10.17.0-alpine3.9 as ovi_portfolio_image
WORKDIR /app
RUN npm install -g npm@latest
RUN npm install -g nodemon
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev
