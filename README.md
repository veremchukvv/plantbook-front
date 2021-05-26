# spa-plantbook
## Создаём новое React-приложение для Plantbook
- Масштабирование до большого количества файлов и компонентов;
- Использование сторонних библиотек из npm;
- Раннее обнаружение распространённых ошибок;
- Отражение изменений CSS и JS на лету в процессе разработки;
- Оптимизация кода для продакшена.

### Начинаем данный проект, используя Create React App
```jsx
npx create-react-app plantbook
```
### Все остальные манипуляции будут в plantbook
```jsx
cd plantbook
```
### Данный шаблон является стартовым, поэтому добавляем в него все необходтмые изменения:
- в папку src добавляем папку components, в ней будут находиться все компоненты нашего одностроничного приложения
- в папку src добавляем папку styles, в ней будут находиться стили нашего приложения
- в корне создали файл Dockerfile
```dockerfile
# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:14-alpine AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN yarn install && yarn build

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory

WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

```
### Запустить 
```js
docker build -t plant .
docker run --rm -it -p 8080:80 plant

http://localhost:8000/
```