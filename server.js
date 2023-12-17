const express =require("express");

const app = express();

app.use(express.json())

const port = 8081;

const todoList = ["playcricket","play mobile games ","study hard","be productive everyday","help others"];

app.get("/todos",(req,res)=>{
    res.status(200).send(todoList);
})

app.post("/todos",(req,res)=>{
    let itemtoadd=req.body.item;
    todoList.push(itemtoadd);
    res.status(201).send({
        message:"item added "})
})

app.delete("/todos",(req,res)=>{
    let itemtodelete=req.body.item;
    todoList.find((elem,index)=>{
        if(elem===itemtodelete){
            todoList.splice(index,1);
        }
    });
    res.status(204).send({
        message:`item ${itemtodelete} is deleted `
    })
})

app.all("/todos", (req, res)=>{
    res.status(501).send({
        message: "Not yet implemented"
    })
})

app.all("*",(req,res)=>{
    res.status(404).send({
        message: "default url"
    })
})

app.listen(port,()=>{
    console.log(`node started with express at port ${port}`);
})