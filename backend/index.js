import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import connectToMongoDB from "./db/connectToMongoDB.js"


const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000

app.use("/api/auth", authRoutes)

app.get("/", (req, res)=>{
    res.send("Hello world!!");
    
})

app.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`server is listning at port ${PORT}`)
})