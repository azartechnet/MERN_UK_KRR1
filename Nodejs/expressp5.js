const express = require('express');
const app = express();

app.use(express.raw());

app.post('/', function (req, res) {
    console.log(req.body);
    res.end();
});

app.listen(3001, () => {
    console.log("Server is Running on port 3001.....");
});