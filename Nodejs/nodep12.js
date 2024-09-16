const h1=require('http')
function printMessage()
{
    console.log("Hello every 2 seconds")
}
setInterval(printMessage,2000)
const server=h1.createServer((req,res)=>{
    res.end("Server is Running..")
})
server.listen(8081);