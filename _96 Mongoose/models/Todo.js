import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    // title: String,
    title: {type: String, required: true, default: "Fuck You"},
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', TodoSchema)