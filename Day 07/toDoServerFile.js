const fs = require('fs');
const express = require('express');
const port = 3000;
const path = 'E:/WebDev/WebDev Codes/day 07/a.json'
const app=express();
app.use(express.json());

function findIndex(arr,id){
    for(let i=0;i<arr.length;i++){
        if(arr[i].id === id){
            return i;
        }
    }
    return -1;
}

function removeAtIndex(arr,id){
    let newArray = [];
    for(let i = 0;i<arr.length;i++){
        if(i!== id){
            newArray.push(arr[i]);
        }

    }
    return newArray;
}

app.get('/todos',(req,res)=>{
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err){
            throw err;

        }
        res.json(JSON.parse(data));
    })
});

app.get('/todos/:id',(req,res)=>{
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err) throw err;
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos,parseInt(req.params.id));
        if(todoIndex===-1){
            res.status(404).send();
        }
        else{
            res.json(todos[todoIndex]);
        }
    });
});

app.post('/todos',(req,res)=>{
    const newTodo = {
        id:Math.floor(Math.random()*1000),
        title:req.body.title,
        description:req.body.description
    }

    fs.readFile(path,'utf-8',(err,data)=>{
        if (err) throw err;
        const todos = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile(path,JSON.stringify(todos),(err,data)=>{
            if(err) throw err;
            res.status(201).send();

        });
    });
});

app.put('/todos/:id',(req,res)=>{
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err) throw err;
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos,parseInt(req.params.id));
        if(todoIndex===-1){
            res.status(404).send();
        }
        else{
            const updateTodo = {
                id:todos[todoIndex].id,
                title:req.body.title,
                description:req.body.description
            }
            todos[todoIndex]=updateTodo;
            fs.writeFile(path,JSON.stringify(todos),(err)=>{
                if(err) throw err;
                res.status(200).json(updateTodo);
            });
        }
    });
});

app.delete('/todos/:id',(req,res)=>{
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err) throw err;
        let todos = JSON.parse(data);
        const todoIndex = findIndex(todos,parseInt(req.params.id));

        if(todoIndex === -1){
            res.status(404).send();
        }
        else{
            todos = removeAtIndex(todos,todoIndex);
            fs.writeFile(path,JSON.stringify(todos),(err)=>{
                if(err) throw err;
                res.status(200).send();
            });
        }
    });
});

app.use((req,res,next)=>{
    res.status(404).send();
})

app.listen(port);