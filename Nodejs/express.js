const exp=require('express')
const app=exp()
    app.get("/",function(req,res){
        res.send("HelloWorld")
    }).listen(3001)
   

console.log("Server is Running..")