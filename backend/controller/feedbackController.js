/* eslint-disable import/extensions */
const Feedback = require("../models/feedbackSchema.js");
const catchAsync = require("../utils/catchAsync.js");

exports.addFeedback = catchAsync(async (req, res) => {
  try {
    const newFeedback = await Feedback.create(req.body);
    // const { task } = req.body;
    const data = req.body;
    console.log("Data which is added", data);
    res.status(201).json({
      status: "success",
      feedback: newFeedback,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
});
