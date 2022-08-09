import express from "express";
import dotenv from "dotenv";
import connectDb from "./Middlewares/db.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3002;
connectDb();

app.listen(port, () => console.log(`App running port ${port}`));
