FROM node:10.17.0-alpine3.9 as ovi_portfolio_image
WORKDIR /app
RUN npm install -g npm@latest
RUN npm install -g nodemon
COPY . /app
COPY package.json /app/package.json
RUN npm install
#RUN npm run build
#CMD npm run start
CMD npm run dev
