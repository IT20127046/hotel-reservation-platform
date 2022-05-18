const express = require("express");
const res = require("express/lib/response");
const hotel = require("../models/hotelModel");
const router = express.Router();

//save Hotel Details

router.post("/hotel/add", (req, res) => {
  let newHotel = new hotel(req.body);

  newHotel.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Hotel Details Created Succefully",
    });
  });
});

//get Hotel Details

router.get("/hotels", (req, res) => {
  hotel.find().exec((err, hotelDetails) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingHotelDetails: hotelDetails,
    });
  });
});

//get specific Hotel Details

// router.get("/hotel/get/:id", (req, res) => {
//   let hotelId = req.params.id;

//   hotel.findById(hotelId, (err, hotelDetails) => {
//     if (err) {
//       return res.status(400).json({ success: false, err });
//     }
//     return res.status(200).json({
//       success: true,
//       hotelDetails,
//     });
//   });
// });

router.get("/hotel/get/:id", (req, res) => {
  let hotelId = req.params.id;

  hotel.findOne({hotelId:hotelId}, (err, hotelDetails) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      hotelDetails,
    });
  });
});

//update Hotel Details

router.put("/hotel/update/:id", (req, res) => {
  hotel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, hotelDetails) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Update Successfully",
      });
    }
  );
});

//delete Hotel Details

router.delete("/hotel/delete/:id", (req, res) => {
  hotel
    .findByIdAndRemove(req.params.id)
    .exec((err, deletedHotel) => {
      if (err)
        return res.status(400).json({
          message: "Deleted unsuccesful",
          err,
        });

      return res.json({
        message: "Deleted Succesfull",
        deletedHotel,
      });
    });
});

module.exports = router;
