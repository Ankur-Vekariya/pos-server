let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Student Model
let categorySchema = require("../Models/Category.js");

// CREATE Student

router.route("/create-category").post((req, res, next) => {
  categorySchema.create(
    {
      categoryName: req.body.categoryName,
      description: req.body.description,
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
// router.route("/edit-floor/:id").get((req, res) => {
//   floorSchema.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// // Update Student
// router.route("/update-floor/:id").put((req, res, next) => {
//   floorSchema.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         return next(error);
//         console.log(error);
//       } else {
//         res.json(data);
//         console.log("Student updated successfully !");
//       }
//     }
//   );
// });
// // Delete Student
// router.route("/delete-floor/:id").delete((req, res, next) => {
//   floorSchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data,
//       });
//     }
//   });
// });
module.exports = router;
