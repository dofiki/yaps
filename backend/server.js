import { configDotenv } from "dotenv";
configDotenv();

import express from "express";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js"
import postRoutes from "./routes/post.routes.js"

const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser()); 

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
