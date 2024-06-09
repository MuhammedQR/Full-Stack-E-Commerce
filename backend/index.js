const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");
const userSignUpController = require( "./controller/user/userSignUp" );
const userSignInController = require( "./controller/user/userSignIn" );

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.post(
  "/api",
  router.post("/signup", userSignUpController),
  router.post("/signin", userSignInController)
);
app.get("/api", router);

const PORT = 8080 || process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connect to DB");
    console.log("server is runing " + PORT);
  });
});
