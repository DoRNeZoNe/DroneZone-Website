const express = require("express");
const cors = require("cors");

const connectToMongo = require("./db");

const app = express();
const port = process.env.PORT || 5005;
const feedbackRouter = require("./router/feedbackRouter");
// connectToMongo();
app.use(cors());
app.use(express.json());

app.use("/api", feedbackRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
