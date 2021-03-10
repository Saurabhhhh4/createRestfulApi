const express = require ("express");

require("./db/connection.js");
const myinfo=require("./db/models/myinfo");

const app =express();

const port = process.env.PORT || 3000;

app.use(express.json());
// create my info
app.post("/myinfo", (req,res) => {

    console.log(req.body);

    const user= new myinfo(req.body);
    console.log(user);

   

    user.save().then(() =>{
        res.status(201).send(user);
        res.send("hello people saurabh this side");
    }).catch((e) =>{
        res.status(400).send(e);
        res.send("hello people saurabh ");
    })
    
})  
app.get("/myinfo", (req,res) => {
    res.send("hello people saurabh this side");

}) 

app.listen(port , () =>{
    console.log(`connection is setup at ${port}`);
})