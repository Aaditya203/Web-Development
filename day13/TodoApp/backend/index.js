require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { parse } = require("zod");
const { Todo } = require("./db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());
app.post("/todo",async (req,res)=>{
    const createPayloads = req.body;
    const parsedPayloads = createTodo.safeParse(createPayloads);
    if(!parsedPayloads.success){
        res.status(411).json({
            mssg:"Invalid inputs"
        })
        return;
    }

    await Todo.create({
        title:createPayloads.title,
        description:createPayloads.description,
        isCompleted:false
    })
    res.json({
        mssg:"todo created successfully!!"
    })
})

app.get("/todos",async (req,res)=>{
    const todos = await Todo.find({})
    res.json({
        todos
    })
})

app.put("/completed",async (req,res)=>{
    const idPayload = req.body;
    const parsedIdPayload = updateTodo.safeParse(idPayload);
    if(!parsedIdPayload.success){
        res.status(411).json({
            mssg:"Invalid inputs"
        })
        return;
    }
    await Todo.update({
        _id:req.body.id
    },{
        isCompleted:true
    })
    res.json({
        mssg:"Completed"
    })
})

app.listen(3000);