const express=require('express')
const app=express()
const PORT=3001;

//multiple routing

const r1=express.Router()
const r2=express.Router()
const r3=express.Router()

r1.get("/",function(req,res){
    res.send("Hello from router-1")
})
r2.get("/",function(req,res){
    res.send("Hello from router-2")
})
r3.get("/",function(req,res){
    res.send("Hello from router-3")
})

app.use("/user",r1)
app.use("/admin",r2)
app.use("/product",r3)

app.listen(PORT,function(err){
     if(err) console.log(err);
     console.log("Server is running on port "+PORT);
})