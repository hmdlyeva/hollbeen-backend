const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    taskSenderId: String,
    taskRecieverId: String,
    taskContent: String,
    approve: Boolean,
    deny: Boolean,
    taskTime:String,
  },
  {
    collection: "Tasks",
    timestamps: true,
  }
);

const Tasks = mongoose.model("Tasks", schema);

module.exports = Tasks;