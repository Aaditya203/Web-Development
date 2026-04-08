const express = require('express')
const port =3000;
const app = express();
app.use(express.json());

function userMiddleWare(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!='aditya' || password != 'pass'){
        res.status(403).json({
            mssg:"Incorrect Inputs!"
        });
    }
    else{
        next();
    }
}

function idMiddleWare(req,res,next){
    const id = req.query.id;
    if(id!=1 && id!=2){
        res.status(403).json({
            mssg:"Wrong inputs!!"
        })
    }
    else{
        next();
    }
}
app.get('/health-checck',userMiddleWare,idMiddleWare,(req,res)=>{
    res.send("Your heart is healthy!!");
});
app.listen(port);