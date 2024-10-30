const Tasks = require("../models/taskModel");
require("dotenv").config();

const getAllTasks = async (req, res) => {
  let AllTasks = await Tasks.find({});
  res.send(AllTasks);
};

const getTaskByID = async (req, res) => {
  let id = req.params.id;
  let FindTask = await Tasks.findOne({ _id: id });
  res.send(FindTask);
};

const deleteTask = async (req, res) => {
  let id = req.params.id;
  let FindTaskAndDelete = await Tasks.findByIdAndDelete({ _id: id });
};

const postNewTask = async (req,res)=>{

        const NewTask = new Tasks(req.body)
        NewTask.save()
}

const updatePatchTask = async (req,res)=>{
    let id = req.params.id;
    let UpdatedTask = await Tasks.findOneAndUpdate({_id:id},req.body)
}

const updatePutTask = async (req,res)=>{
    let id = req.params.id;
    let UpdateTask = await Tasks.replaceOne({_id:id},req.body)
}

module.exports = { getAllTasks, getTaskByID ,deleteTask,postNewTask,updatePatchTask,updatePutTask};