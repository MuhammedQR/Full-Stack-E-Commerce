const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();

// تعريف خيارات CORS
app.use(cors({
  origin: process.env.FRONTEND_URL, // تأكد من تعريف هذا في ملف .env
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

// تعريف المنفذ من متغيرات البيئة أو القيمة الافتراضية
const PORT = process.env.PORT || 8080;

// الاتصال بقاعدة البيانات وبدء الخادم
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
