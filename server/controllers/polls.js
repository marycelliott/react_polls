const Poll = require("../models/poll");

module.exports = {
  index: (req, res) => {
    Poll.find()
      .then(pollsInDB => res.json(pollsInDB))
      .catch(err => res.json(err));
  },
  show: (req, res) => {
    console.log("In show controller ", req.params);
    Poll.findOne({ _id: req.params.id })
      .then(pollsInDB => res.json(pollsInDB))
      .catch(err => res.json(err));
  },
  create: (req, res) => {
    console.log("In create controller ", req.body);
    const { name, question, option1, option2, option3, option4 } = req.body;
    Poll.create({ name, question, option1, option2, option3, option4 })
      .then(pollInDB => res.json(pollInDB))
      .catch(err => res.json(err));
  },
  update: (req, res) => {
    const { name, question, option1, option2, option3, option4 } = req.body;
    Poll.findOneAndUpdate(
      { _id: req.params.id },
      { name, question, option1, option2, option3, option4 },
      { new: true, runValidators: true }
    )
      .then(pollsInDB => res.json(pollsInDB))
      .catch(err => res.json(err));
  },
  delete: (req, res) => {
    Poll.findOneAndDelete({ _id: req.params.id })
      .then(pollsInDB => res.json(pollsInDB))
      .catch(err => res.json(err));
  }
};
