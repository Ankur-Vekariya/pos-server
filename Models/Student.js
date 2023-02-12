const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let studentSchema = new Schema(
  {
    categoryName: {
      type: String,
    },
    categoryId: {
      type: Number,
    },
    photo: {
      type: String,
    },
  },
  {
    collection: "categorys",
  }
);
module.exports = mongoose.model("student", studentSchema);
