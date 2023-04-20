const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let productSchema = new Schema(
  {
    productName: {
      type: String,
    },
    description: {
      type: String,
    },
    photo: {
      type: String,
    },
    price: {
      type: String,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
      },
    ],
  },
  {
    collection: "products",
  }
);
module.exports = mongoose.model("products", productSchema);
