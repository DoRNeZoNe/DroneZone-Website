const express = require("express");
const cors = require("cors");
const AppError = require("./utils/appError");

const app = express();

const feedbackRouter = require("./router/feedbackRouter");
// connectToMongo();
app.use(cors());
app.use(express.json());

app.use("/api", feedbackRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`cant find ${req.originalUrl} so try different url`, 404));
});
module.exports = app;
