import express from "express";
const app = express();

// Since we've mentioned this in express.d.ts file, Typescript is not throwing an error.
app.functionDoesntExist();

// express.d.ts file doesn't contain the method use(). Install the actual type declaration
// library for expres => npm i @types/express
app.use();
