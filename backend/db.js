const mongoose = require("mongoose");

// eslint-disable-next-line import/no-extraneous-dependencies
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const atlasConnectionString = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(atlasConnectionString);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
