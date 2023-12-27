const asyncHandler = require("express-async-handler");

//@desc Get goals
//@route Get /api/goals

const { text } = require("express");

//@access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get new goals from the controller" });
});

//@desc Get goals
//@route Get /api/goals
//@access private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body == text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goal" });
});

//@desc Get goals
//@route Get /api/goals/:id
//@access private
const putGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//@desc Get goals
//@route Get /api/goals/:id
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  putGoals,
  deleteGoals,
};
