const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000;

// Database Connection
mongoose.connect('mongodb+srv://User-6355:User-6355@cluster0.ljlfrcm.mongodb.net/User',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Sucess");
}).catch(err=>{
    console.log("Connection Failed ",err)
    process.exit(1)
})

// Create Schema
const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    age:Number
})

// Create Model Based On Schema 
const User = mongoose.model('User',userSchema);

// Middleware
app.use(bodyParser.json())

//Routes
app.post('/user',async(req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(200).send(user);
    }catch(err){
        res.status(400).send(err)
    }
})
app.get('/',(req,res)=>{
    res.send("This Is Root Path")
})

app.listen(port,()=>{
    console.log(`Listning On Port ${port}`)
})