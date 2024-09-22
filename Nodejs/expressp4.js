const express = require('express');
  
const app = express();
const PORT = 3000;
  
app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello  Learner!</h1>");
}).listen(PORT)
  


