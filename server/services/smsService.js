const express = require("express");
const service = express.Router();

const Vonage = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: process.env.SMS_VONAGE_API_KEY,
  apiSecret: process.env.SMS_VOANGE_API_SECRET,
});

service.post("/sms/send", (req, res) => {
  let getMsg = req.body.sendmsg;

//  console.log(getMsg);

//   const from = "Vonage APIs";
//   const to = "94710411972";
//   const text = getMsg;

//   vonage.message.sendSms(from, to, text, (err, responseData) => {
//     if (err) {
//       console.log(err);
//     } else {
//       if (responseData.messages[0]["status"] === "0") {
//         console.log("Message sent successfully.");
//       } else {
//         console.log(
//           `Message failed with error: ${responseData.messages[0]["error-text"]}`
//         );
//       }
//     }
//   });
});

module.exports = service;
