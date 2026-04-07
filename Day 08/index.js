const express = require('express');
const port =3000;
const app = express();
app.use(express.json());

var users = [{
    name:"Adam",
    kidneys:[{
        healthy:true
    },
    {
        healthy:false
    },{
        healthy:true
    },{
        healthy:true
    }]
}];

app.get('/',(req,res)=>{
    const kidney = users[0].kidneys;
    const numberOfKidneys = kidney.length;
    let healthy = 0;
    for(let i=0;i<numberOfKidneys;i++){
        if(kidney[i].healthy){
            healthy++;
        }
    }
    console.log(healthy);
});

app.post('/',(req,res)=>{
    const newKidney = {
        healthy:req.body.healthy
    }
    users[0].kidneys.push(newKidney);
    res.status(200).send();
})

app.listen(port);