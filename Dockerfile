FROM node:20-alpine
WORKDIR /app
COPY ./webapp/package.json ./webapp/yarn.lock ./
RUN yarn install
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
