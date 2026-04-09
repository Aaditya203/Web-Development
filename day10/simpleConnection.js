require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:<password>@cluster0.929ebve.mongodb.net/usernewapp");

const User = mongoose.model("Users",{
    name:String,
    email:String,
    password:String
});
app.post('/signin',async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const exists = await User.findOne({email:email});
    if(exists){
        return res.status(404).json({
            mssg:"User Already Exists!!"
        });
    }
    const user = new User({
        name:username,
        email:email,
        password:password
    });
    user.save();
    res.json({
        mssg:"User created Successfully!!"
    });

})
app.listen(3000);