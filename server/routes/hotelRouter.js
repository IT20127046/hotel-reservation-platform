const express = require("express");
const res = require("express/lib/response");
const hotel = require("../models/hotelModel");
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//save Hotel Details

// router.post("/hotel/add", (req, res) => {
//   let newHotel = new hotel(req.body);

//   newHotel.save((err) => {
//     if (err) {
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     return res.status(200).json({
//       success: "Hotel Details Created Succefully",
//     });
//   });
// });

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

router.get("/hotel/get/byID/:id", (req, res) => {
  let hotelId = req.params.id;

  hotel.findById(hotelId, (err, hotelDetails) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      hotelDetails,
    });
  });
});

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

// --------------------------------new-----------------------------------------
// Hotel Admin Login and Registration

// Registration with password encryption
router.post('/hotel/add', (req, res) => {

  let hotelData = {
      hotelID: req.body.hotelID,
      hotelName: req.body.hotelName,
      district: req.body.district,
      city: req.body.city,
      address: req.body.address,
      teleNo: req.body.teleNo,
      description: req.body.description,
      email: req.body.email,
      password: req.body.password
  }

  hotel.findOne({
      hotelID: req.body.hotelID
  })
      .then(Hotel => {
          if (!Hotel) {
              bcrypt.hash(req.body.password, 10, (err, hash) => {
                hotelData.password = hash
                  // console.log("bcrypt")
                  hotel.create(hotelData)
                      .then(res => {
                          // console.log("then")
                          
                          res.status(200).json({
                              success: true
                          })
                          
                      })
                      .catch(err => {
                          // console.log("catch")
                          res.status(400).json({
                            success: true
                        });
                      });
              })

          }
          else {
              res.status(400).json({
                  error: "A hotel with the same registration number already exists"
              })
          }
      })
      .catch(err => {
          res.send("error" + err)
      })
})

// Login with jsonwebtoken
router.post('/hotel/login', (req, res) => {
  hotel.findOne({
      email: req.body.email
  })
      .then(Hotel => {
          if (Hotel) {
              if (bcrypt.compareSync(req.body.password, Hotel.password)) {
                  const payload = {
                      hotelID: Hotel.hotelID,
                      hotelName: Hotel.hotelName,
                      district: Hotel.district,
                      city: Hotel.city,
                      address: Hotel.address,
                      teleNo: Hotel.teleNo,
                      description: Hotel.description,
                      email: Hotel.email,
                      password: Hotel.password
                  }
                  const hotelToken = jwt.sign(payload, process.env.SECRET_KEY, {
                      expiresIn: 1440
                  })
                  res.send(hotelToken)
              }
              else {
                  return res.status(401).json({
                    errorMessage: 'User unauthorized!',
                    status: false
                  });  
              }
          }
          else {
              return res.status(401).json({
                errorMessage: 'User unauthorized!',
                status: false
              }); 
          }
      })
      .catch(err => {
          res.status(400).json({
            errorMessage: 'Something went wrong!',
            status: false
          });
      })
})


module.exports = router;
