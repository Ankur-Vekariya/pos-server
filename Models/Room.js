const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let roomSchema = new Schema(
  {
    roomName: {
      type: String,
    },
    description: {
      type: String,
    },
    tables: {
      type: Number,
    },
  },
  {
    collection: "room",
  }
);
module.exports = mongoose.model("room", roomSchema);
