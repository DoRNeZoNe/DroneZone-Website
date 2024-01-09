const express = require("express");
const cors = require("cors");

// const connectToMongo = require("./db");

const app = express();

const feedbackRouter = require("./router/feedbackRouter");
// connectToMongo();
app.use(cors());
app.use(express.json());

app.use("/api", feedbackRouter);

module.exports = app;
