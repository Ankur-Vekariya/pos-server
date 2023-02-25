const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let floorSchema = new Schema(
  {
    floorName: {
      type: String,
    },
    description: {
      type: String,
    },
    rooms: {
      type: Number,
    },
  },
  {
    collection: "floor",
  }
);
module.exports = mongoose.model("floor", floorSchema);
