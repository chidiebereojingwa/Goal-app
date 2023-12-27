//@desc Get goals
//@route Get /api/goals
//@access private
const getGoals = (req, res) =>{
    res.status(200).json({ message: "Get new goals from the controller" });
}

//@desc Get goals
//@route Get /api/goals
//@access private
const postGoals = (req, res) =>{
    res.status(200).json({ message: "Set goal" });
}

//@desc Get goals
//@route Get /api/goals/:id
//@access private
const putGoals = (req, res) =>{
    res.status(200).json({ message: `Update goal ${req.params.id}` });
}

//@desc Get goals
//@route Get /api/goals/:id
//@access private
const deleteGoals = (req, res) =>{
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
}

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};