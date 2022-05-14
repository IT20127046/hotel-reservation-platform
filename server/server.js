const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

//import routers

const roomrouter = require("./routes/roomRouter");
const hotelRouter = require("./routes/hotelRouter");




app.use(bodyparser.json());
app.use(cors());

//use routers

app.use(roomrouter);
app.use(hotelRouter);


const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

app.listen(port, () => {
  console.log(`server is started in port ${port}`);
});