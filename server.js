const express = require("express")
const app = express()
const {v4:uuidv4} =require("uuid")
const PORT =5000;

//middleware for data on post request
app.use(express.json({extended:false}))

const todos = [{
    message:"wash car",
    id:1
},
{
    message:"shopping",
    id:2
},
{
    message:"Initial tasks",
    id:3
}
]

app.get("/",(req,res)=>{
    res.status(200).json(todos)
})

app.post("/",(req,res)=>{
    const newTodo = {
        message: req.body.message,
        id: uuidv4(),
    }
    todos.push(newTodo)
    res.status(201).json(todos)
})

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})
