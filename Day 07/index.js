const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());
app.post('/',(req,res)=>{
    console.log(req.body)
    console.log(req.headers)
    res.send({
        mss:"Hello"
    })
})
app.listen(port)