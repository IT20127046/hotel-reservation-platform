const express = require("express");
const service = express.Router();

// This is Dummy Taxi Service //

// Get Customer Input Parameters //
service.post("/taxi/get", (req, res) => {

  const taxiService = req.body.taxiService;
  const travelFrom = req.body.travelFrom;
  const travelTo = req.body.travelTo;
  const vechileType = req.body.vechileType;
  const customerName = req.body.name;
  const teleNo = req.body.teleNo;

  if (!res) {
    return res.status(400).json({
      success: "Error! Check Details and Try Again",
    });
  }
  return res.status(200).json({
    success: "Your Appointment is Ready. We send a SMS with appoinment details",
  });
  
  });  

module.exports = service;