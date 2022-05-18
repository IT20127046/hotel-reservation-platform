const mongoose = require("mongoose");

const reservedroommodelSchema = new mongoose.Schema({


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
  date: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },


  roomid: {
    type: String,
    required: true,
  },




});

module.exports = mongoose.model("reservedroomsdetails", reservedroommodelSchema);
