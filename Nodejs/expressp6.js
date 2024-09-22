const express=require('express')
const app=express()
const PORT=3001

//Single Routing

const r1=express.Router()

r1.get("/",function(req,res){
    console.log("Routing Working...")
    res.send(`<form>
        UserName:<input type='text'/>
        <input type='submit' value='Login'/>
        </form>`)
})
app.use(r1)

app.listen(PORT,function(err){
    if(!err)console.log("Server is Running...")
})