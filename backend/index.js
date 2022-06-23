import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dbConnection } from "./config/db.js";
import AuthRouter from "./router/AuthRouter.js";
import UserRouter from "./router/UserRouter.js";

dotenv.config();
const PORT = process.env.PORT || 9000;
const app = express();

// connect to DB
await dbConnection();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// api routes
app.use("/api/auth", AuthRouter);
app.use("/api/users", UserRouter);
app.use("/api/cookie", (req, res) => {
  res.cookie("test", "test token cookie", { maxAge: 900000, httpOnly: true });
  res.end();
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
