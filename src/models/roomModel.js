const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    roomId: Number,
    start: Boolean,
    end: Boolean,
  },
  {
    collection: "Rooms",
    timestamps: true,
  }
);

const Rooms = mongoose.model("Rooms", schema);

module.exports = Rooms;
