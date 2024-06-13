const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();

// Allow all origins for development or testing purposes (consider a more restrictive approach in production)
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const PORT = 8080 || process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Connected to DB");
    console.log("Server is running on port:", PORT);
  });
});
