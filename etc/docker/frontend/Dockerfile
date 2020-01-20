# build-stage
FROM node:12.14.1-alpine as build-stage

WORKDIR /app
COPY ./frontend/package.json ./frontend/yarn.lock ./frontend/webpack* ./
RUN yarn install
COPY ./frontend/ ./
RUN yarn build

CMD ["yarn", "build", "-d", "--watch"]

# production-stage
FROM node:12.14.1-alpine as production-stage

WORKDIR /app
COPY ./frontend/package.json ./frontend/yarn.lock ./frontend/webpack* ./
RUN yarn install
COPY ./frontend/ ./
RUN yarn build

CMD ["yarn", "server"]
