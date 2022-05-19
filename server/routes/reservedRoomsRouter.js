const express = require("express");
const res = require("express/lib/response");
const reservedroom = require("../models/reservedRoomsModel");
const router = express.Router();

//save reservedRoom Details

router.post("/reservedroom/save", (req, res) => {
  let newRoom = new reservedroom(req.body);

  newRoom.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Room Reserved Succefully",
    });
  });
});

//get reservedRoom Details

router.get("/reservedrooms", (req, res) => {
  reservedroom.find().exec((err, roomdetails) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingreservedroomdetails: roomdetails,
    });
  });
});

//get specific reservedRoom Details

router.get("/reservedroom/:id", (req, res) => {
  let roomId = req.params.id;

  reservedroom.findById(roomId, (err, roomdetails) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      roomdetails,
    });
  });
});

//get specific reservedRoom Details based HotelID

// router.get("/hotel/reservedroom/:id", (req, res) => {
//   let hotelID = req.params.id;

//   reservedroom.findOne({hotelid:hotelID}, (err, roomdetails) => {
//     if (err) {
//       return res.status(400).json({ success: false, err });
//     }
//     return res.status(200).json({
//       success: true,
//       roomdetails,
//     });
//   });
// });

//update reservedRoom Details

router.put("/reservedroom/update/:id", (req, res) => {
  reservedroom.findByIdAndUpdate(
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

//delete reservedRoom Details

router.delete("/reservedroom/delete/:id", (req, res) => {
  reservedroom
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







//get a specipic room no details
router.get("/reservedroom/roomno/:id",(req,res) =>{
  let roomno = req.params.id;

  reservedroom.find({roomno:roomno},(err,room)=>{
      if(err){
          return res.status(400).json({success:false, err});
      }
      return res.status(200).json({
          success:true,
          exsitingRooms:room
      });
  });
});




//------------------



module.exports = router;
