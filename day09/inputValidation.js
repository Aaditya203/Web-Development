const express = require('express');
const zod = require('zod');
const app = express();
const port = 3000;

const schema = zod.array(zod.number());

const schema1 = zod.email();

app.use(express.json());

app.post('/health',(req,res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.send({
        response
    });
});

app.get('/health',(req,res)=>{
    const data = req.body.email;
    const response = schema1.safeParse(data);
    if(!response.success){
        res.status(411).send("Wrong input!!")
    }
    else{
        res.send("Correct Email!!");
    }
})

app.listen(port);