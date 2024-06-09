const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();
app.use(
  cors({
    "Access-Control-Allow-Origin": process.env.FRONTEND_URL,
    origin:
      "https://full-stack-e-commerce-rho.vercel.app" ||
      process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const PORT = 8080 || process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connect to DB");
    console.log("server is runing " + PORT);
  });
});
