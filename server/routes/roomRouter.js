const express = require("express");
const res = require("express/lib/response");
const room = require("../models/roomModel");
const router = express.Router();

//save Room Details

router.post("/room/save", (req, res) => {
  let newRoom = new room(req.body);

  newRoom.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Room Details Created Succefully",
    });
  });
});

//get Room Details

router.get("/rooms", (req, res) => {
  room.find().exec((err, roomdetails) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingroomdetails: roomdetails,
    });
  });
});

//get specific Room Details

router.get("/room/:id", (req, res) => {
  let roomId = req.params.id;

  room.findById(roomId, (err, roomdetails) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      roomdetails,
    });
  });
});

//update Room Details

router.put("/room/update/:id", (req, res) => {
  room.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, roomdetails) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Update Successfully",
      });
    }
  );
});

//delete Room Details

router.delete("/room/delete/:id", (req, res) => {
  room
    .findByIdAndRemove(req.params.id)
    .exec((err, deletedRoom) => {
      if (err)
        return res.status(400).json({
          message: "Deleted unsuccesful",
          err,
        });

      return res.json({
        message: "Deleted Succesfull",
        deletedRoom,
      });
    });
});

module.exports = router;
