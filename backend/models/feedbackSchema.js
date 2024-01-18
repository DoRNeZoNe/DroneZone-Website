const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A task can not be empty"],
  },
  email: {
    type: String,
    required: [true, "A task can not be empty"],
  },
  phone: {
    type: String,
    required: [true, "A task can not be empty"],
  },
  query: {
    type: String,
    required: [true, "A task can not be empty"],
  },
});

module.exports = mongoose.model("feedback", feedbackSchema);
