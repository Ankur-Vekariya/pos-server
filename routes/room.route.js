let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Student Model
let roomSchema = require("../Models/room.js");

// CREATE Student

router.route("/create-room").post((req, res, next) => {
    roomSchema.create(
    {
      roomName: req.body.roomName,
      description: req.body.description,
      rooms: req.body.rooms,
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
    roomSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Single Student
router.route("/edit-room/:id").get((req, res) => {
    roomSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Student
router.route("/update-room/:id").put((req, res, next) => {
    roomSchema.findByIdAndUpdate(
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
router.route("/delete-room/:id").delete((req, res, next) => {
    roomSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
