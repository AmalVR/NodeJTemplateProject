FROM node:18

WORKDIR /app
COPY package.json .
COPY tsconfig.json .
COPY tsconfig.compile.json .
COPY yarn.lock .
COPY ./prisma ./prisma
COPY .npmrc .

ARG NPM_TOKEN=${NPM_TOKEN}
ENV NPM_TOKEN=${NPM_TOKEN}

RUN yarn install 
COPY ./src ./src
COPY ./views ./views
COPY start.sh .

EXPOSE 8080
ENV PORT 8080
ENV NODE_ENV production

CMD ["sh", "start.sh"]
