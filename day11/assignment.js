const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());
// app.use(express.json());

app.get('/simpleInterest',(req,res)=>{
    const principal = req.query.principal
    const rate = req.query.rate
    const time = req.query.time

    const interest = (principal * rate * time )/100
    const total = parseInt(interest) + parseInt(principal);
    res.send({
        "total":total,
        'interest':interest
    })

})

app.listen(3000);