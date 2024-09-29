const express=require('express')
const app=express()

//app.disable('trust proxy')

app.enable('trust proxy')

console.log(app.get('trust proxy'))