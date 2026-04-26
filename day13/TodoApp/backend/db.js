const mongoose = require('mongoose')

mongoose.connect("your-url")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    isCompleted:Boolean
})

const Todo = mongoose.model('Todos',todoSchema);
module.exports = {
    Todo
}