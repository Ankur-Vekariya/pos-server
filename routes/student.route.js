let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Student Model
let categorySchema = require("../models/Student");

// CREATE Student

router.route("/create-category").post((req, res, next) => {
  let id = categorySchema.length;
  let categoryId = id + 1;
  console.log("id=======", id);
  categorySchema.create(
    {
      categoryName: req.body.categoryName,
      categoryId: categoryId,
      photo: req.body.photo,
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
  categorySchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Single Student
router.route("/edit-category/:id").get((req, res) => {
  categorySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Student
router.route("/update-category/:id").put((req, res, next) => {
  categorySchema.findByIdAndUpdate(
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
router.route("/delete-category/:id").delete((req, res, next) => {
  categorySchema.findByIdAndRemove(req.params.id, (error, data) => {
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
