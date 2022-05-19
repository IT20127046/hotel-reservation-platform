const express = require("express");
const service = express.Router();
const taxi = require("../models/taxiService");

// This is Dummy Taxi Service //

// Get Customer Input Parameters //
service.post("/taxi/get", (req, res) => {

  let taxiAppoinment = new taxi(req.body);

  const taxiService = req.body.taxiService;
  const travelFrom = req.body.travelFrom;
  const travelTo = req.body.travelTo;
  const vechileType = req.body.vechileType;
  const customerName = req.body.name;
  const teleNo = req.body.teleNo;

  taxiAppoinment.save((err) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: "Your Appointment is Ready. We Send a SMS with Appoinment Details",
        });
      });  
  });  

module.exports = service;