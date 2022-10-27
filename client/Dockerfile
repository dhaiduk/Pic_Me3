# Stage 1
FROM node:14 as build-stage

WORKDIR /picme-client
COPY package.json .
RUN npm install
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

RUN npm run build

# Stage 2
FROM nginx:1.23.1

COPY --from=build-stage /picme-client/nginx /etc/nginx/conf.d/
COPY --from=build-stage /picme-client/build /usr/share/nginx/html
COPY --from=build-stage /picme-client/certs etc/nginx/ssl/certs/
COPY /certs /etc/nginx/ssl/certs/
EXPOSE $REACT_DOCKER_PORT

CMD nginx -g 'daemon off;'
