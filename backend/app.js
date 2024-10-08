const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


// Route imports
const event= require("./routes/eventRoute");
const user=require("./routes/userRoute");
const booking=require("./routes/bookingRoute");
const payment = require("./routes/paymentRoute");
app.use("/api/v1", payment)




app.use("/api/v1",event);
app.use("/api/v1",user);
app.use("/api/v1",booking);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});
//Middleware for Errors
app.use(errorMiddleware);


module.exports =app
