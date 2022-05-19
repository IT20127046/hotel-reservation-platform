const mongoose = require("mongoose");

const roommodelSchema = new mongoose.Schema({
  hotelid: {
    type: String,
    required: true,
  },

  roomno: {
    type: String,
    required: true,
  },

  floor: {
    type: String,
    required: true,
  },

  roomtype: {
    type: String,
    required: true,
  },

  rent: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("roomdetails", roommodelSchema);
