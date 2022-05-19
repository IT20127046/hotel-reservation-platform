const express = require('express');
const dotenv = require('dotenv');
const mailg = require('mailgun-js');
const router = express.Router();
const maildata = require("../models/emailDataModel");




dotenv.config();

const mailgun = () =>
  mailg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post('/api/email', (req, res) => {

  const { email, subject, message } = req.body;
  mailgun()
    .messages()
    .send(
      {
        from: 'Hotel-Reservation-Platform <hrp@mg.hrp.com>',
        to: `${email}`,
        subject: `${subject}`,
        html: `<p>${message}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: 'Error in sending email' });
        } else {
          console.log(body);
          res.send({ success:true, message: 'Email sent successfully' });
        }
      }
    );
});






router.post('/email/save', (req, res) => {


  let emaildata = new maildata(req.body);

  emaildata.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Saved Succefully",
    });
  });

});






router.get("/emails", (req, res) => {
  maildata.find().exec((err, maildata) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingMails: maildata,
    });
  });
});





router.get("/email/:id", (req, res) => {
  let mailId = req.params.id;

  maildata.findById(mailId, (err, mailsdata) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      mailsdata,
    });
  });
});



module.exports = router;
