const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000;

mongoose.connect('mongodb+srv://User-6355:User-6355@cluster0.ljlfrcm.mongodb.net/User',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Sucess");
}).catch(err=>{
    console.log("Connection Failed ",err)
    process.exit(1)
})



app.get('/',(req,res)=>{
    res.send("This Is Root Path")
})

app.listen(port,()=>{
    console.log(`Listning On Port ${port}`)
})