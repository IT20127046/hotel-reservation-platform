const mongoose = require("mongoose");

const emaildata = new mongoose.Schema({

  email: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  

 

});

module.exports = mongoose.model("maildata", emaildata);
