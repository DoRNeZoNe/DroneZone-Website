const mongoose = require("mongoose");

// eslint-disable-next-line import/no-extraneous-dependencies
const dotenv = require("dotenv");

const app = require("./app");

dotenv.config({ path: "./config.env" });

const atlasConnectionString = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(atlasConnectionString);

const port = process.env.PORT || 5005;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
