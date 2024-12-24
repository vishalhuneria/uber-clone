const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const cookiesParser = require("cookie-parser");

const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookiesParser());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
