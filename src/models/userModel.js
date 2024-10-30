const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    nickname: String,
    userRoomId: Number,
  },
  {
    collection: "Users",
    timestamps: true,
  }
);

const Users = mongoose.model("Users", schema);

module.exports = Users;