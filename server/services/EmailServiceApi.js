const express = require('express');
const dotenv = require('dotenv');
const mailg = require('mailgun-js');
const router = express.Router();




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

module.exports = router;
