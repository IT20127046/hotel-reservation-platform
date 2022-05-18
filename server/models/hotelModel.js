const mongoose = require("mongoose");

const hotelModelSchema = new mongoose.Schema({

  hotelID: { type: String, required: true },
  hotelName: { type: String, required: true },
  district: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  teleNo: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model("hotelDetails", hotelModelSchema);
