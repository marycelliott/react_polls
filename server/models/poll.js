const mongoose = require("mongoose");

// BLUEPRINT
const PollSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    question: { type: String, required: [true, "Question is required."] },
    option1: { type: Object, required: [true, "An option is required"] },
    option2: { type: Object, required: [true, "An option is required"] },
    option3: { type: Object, required: [true, "An option is required"] },
    option4: { type: Object, required: [true, "An option is required"] }
  },
  { timestamps: true }
);

// INSTANCE OF PRODUCT - name of model and the blueprint that goes with it
const Poll = mongoose.model("Poll", PollSchema);
// exporting the model
module.exports = Poll;
