const express=require('express')
const app=express()
const PORT=3001;

app.all('/user',function(req,res){
    res.send('Hello from user endpoint')
})
app.listen(PORT,function(){
    console.log('Server is running on port '+PORT)
})