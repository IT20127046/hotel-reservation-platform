const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const payment = require('./routes/payment');

require("dotenv").config();

const app = express();

//import routers

const roomrouter = require("./routes/roomRouter");
const hotelRouter = require("./routes/hotelRouter");
const reservedroomRouter = require("./routes/reservedRoomsRouter");


const smsService = require("./services/smsService");
const taxiService = require("./services/taxiService");


const customerRouter = require("./routes/customerRouter");
const adminRouter = require("./routes/adminRouter");





const emailrouter = require("./services/EmailServiceApi");




app.use(bodyparser.json());
app.use(cors());

//use  routers

app.use(roomrouter);
app.use(hotelRouter);
app.use(reservedroomRouter);

//payment gateway
app.use(express.json());
app.use('/payment', payment);


app.use(smsService);
app.use(taxiService);


app.use(emailrouter);


app.use(customerRouter);
app.use(adminRouter);


const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

app.listen(port, () => {
  console.log(`server is started in port ${port}`);
});
