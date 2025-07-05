import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import {Todo} from "./models/Todo.js"

dotenv.config()


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected with AURA!")
    }
    catch(error){
        console.error("MongoDB connection error", error);
    }
}

connect();


const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const todo = new Todo({ desc: "Description of this todo", isDone: false, days: "Harry"})
    todo.save();
    
    res.send( "First Todo send")
})

app.get('/', async (req, res) => {
    // const todo = new Todo({title: "HEY first Todo", desc: "Description of this todo", isDone: false, days: "Harry"})
    // todo.save();
    let todo =  await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, desc: todo.desc, isDone: todo.isDone, days: todo.days})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
