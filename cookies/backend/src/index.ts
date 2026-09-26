import express from "express";
import cookieParser from "cookie-parser";
import jwt, {JwtPayload} from "jsonwebtoken";
import path from "path";
import cors from "cors";
import { decode } from "punycode";
const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:"http://localhost:5173",
}));

const JWT_SECRET = "secretwebtoken"

app.post('/signin',async (req,res)=>{
    const email = await req.body.email;
    const password = await req.body.password;
    if(!email || !password){
        return res.status(400).json({message:"All fields are required"});
    }

    const token = jwt.sign({
        id:"1",
        email:email
    },JWT_SECRET);
    res.cookie("token",token);
    res.send("Logged In");
})

app.get("/user",async(req,res)=>{
    const token = req.cookies.token;
    const decodeToken = jwt.verify(token,JWT_SECRET) as JwtPayload;
    res.send({
        id:decodeToken.id,
        email:decodeToken.email
    })
})

app.post("/logout",async(req,res)=>{
    res.cookie("token","ads");
    res.json({
        message:"logged out"
    })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"))
})

app.listen(3000)