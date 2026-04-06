const express = require('express');
const port = 3000;
const app = express();

app.use(express.json())
app.post("/conversations/api",(req,res)=>{
    const mssg = req.query.message;
    console.log(mssg);

})
app.listen(port)