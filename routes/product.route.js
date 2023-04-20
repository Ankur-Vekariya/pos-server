let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Student Model
let productSchema = require("../Models/Product.js");

// CREATE Student

router.route("/create-product").post((req, res, next) => {
  let id = productSchema.length;
  let categoryId = id + 1;
  console.log("id=======", id);
  productSchema.create(
    {
      productName: req.body.productName,
      description: req.body.description,
      price: req.body.price,
      photo: req.body.photo,
      categories: req.body.categories,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    }
  );
});
// READ Students
router.route("/").get((req, res) => {
  productSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Single Student
router.route("/edit-products/:id").get((req, res) => {
  productSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Student
router.route("/update-products/:id").put((req, res, next) => {
  productSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Student updated successfully !");
      }
    }
  );
});
// Delete Student
router.route("/delete-student/:id").delete((req, res, next) => {
  productSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = router;
