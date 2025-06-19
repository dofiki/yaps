import { configDotenv } from "dotenv";
configDotenv();

import express from "express";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js"

const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser()); 

// Routes
app.get("/", (req, res) => {
    res.send("hello ");
});
app.use('/api/auth', authRoutes)

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
