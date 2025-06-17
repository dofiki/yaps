import { configDotenv } from "dotenv";
configDotenv();

import express from "express"
import connectDB from "./config/db.js"
const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

app.get("/", (req, res)=>{
    res.send("hello ")
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});