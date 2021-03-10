const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myinfoapi" , {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUniFieldTopology:true

}).then( () =>{
    console.log("connection is succesfull");

}).catch((e) =>{
    console.log("no connection");
})
