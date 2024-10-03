# This stage is used to build the application
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./ 
RUN npm install
COPY . .
RUN npm run build

# This stage we use nginx to serve the static files
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]