# Building an Animal Adoption Site w/ PetFinder

This is part one of a two part series on building an animal adoption site that pulls available animals from the PetFinder API.

We're using Node.js on the backend and Vue.js on the frontend. This **first portion** is just the site setup and sending mock data from the server to the client. In the next part, we'll get a token for the PetFinder API, learn how to refresh that token, and use it to pull and display available pets.

If you find one you love, you'll even have the shelter's information so you can **reach out and adopt**! 🐱🐶

## Project setup

### Setup Express server

```
cd express-server
npm install
npm start
```
### Setup Vue client

```
cd ../vue-client
npm install
npm run serve

```

Make sure both are running at the same time and then you can **view the app on localhost:8080**.