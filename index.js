const express = require('express')
const app = express()

const type = require('./type')                        
const {addtodo} =  require('./type.js')   
const {completetodo} =  require('./type.js')            
const {addata} = require('./db.js')
const {task} = require('./db.js')


const cors = require('cors')
const opt ={
    origin : "localhost:5173"
}
app.use(cors())

app.use(express.json())
const port =3000;

app.get("/todos",async function(req,res){
 const todos = await task.find({});
    res.json({
        todos
    })
})

app.post("/todo", async function(req,res){
       const taskda = req.body;
       const final = addtodo.safeParse(taskda)
       if(!final.success){
       res.status(404).json({
        msg:"something is wrong with input"
    })
      return
}
    await addata(taskda.title,taskda.description,false)
       res.send("data is added succesfully")
})

app.put("/completed",async function(req,res){
        const id = req.body
        const final = completetodo.safeParse(id)

        if(!final.success){
        res.status(404).json({
          msg : "soemthing wrong"
        })
        return    
}
     await task.updateOne({
             _id : req.body.id     
        },{completed :true})

        res.json({
            msg: "value updated"
        })
})

app.listen(port)
