import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import jwt, { type JwtPayload } from "jsonwebtoken";
const JWT_SECRET = "admin123"
const app = express();
app.use(cookieParser())
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))

app.post("/signin",(req,res)=>{
    const {username,password} = req.body;
    const token = jwt.sign({
        id:1
    },JWT_SECRET);
    res.cookie("token",token);
    res.json({ message: "signed in" });
})

app.get("/user",(req,res)=>{
    const token = req.cookies.token;
    const decoded = jwt.verify(token,JWT_SECRET) as JwtPayload;
    res.send({
        userId:decoded.id
    })
})

app.post("/logout",(req,res)=>{
    res.clearCookie("token");
    res.send("logged out")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})