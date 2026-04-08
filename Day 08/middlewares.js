const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());

app.get('/health/check',(req,res)=>{
    const id = req.query.id;
    const username = req.headers.username;
    const pass = req.headers.password;

    if(username != 'aditya' || pass != 'pass'){
        res.status(403).json({
            mssg:"User Don't exist!!"
        });
        return;
    }
    if(id != 1 && id != 2){
        res.status(411).json({
            mssg:"wrong inputs!!"
        });
        return;
    }

    res.send("Your heart is healthy!!")

});
app.listen(port);