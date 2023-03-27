const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let categorySchema = new Schema(
  {
    categoryName: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "category",
  }
);
module.exports = mongoose.model("category", categorySchema);
