/* eslint-disable import/extensions */
const express = require("express");

const router = express.Router();
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require("body-parser");

const feedbackController = require("../controller/feedbackController.js");

const jsonParser = bodyParser.json();
router.route("/feedback").post(jsonParser, feedbackController.addFeedback);
module.exports = router;
