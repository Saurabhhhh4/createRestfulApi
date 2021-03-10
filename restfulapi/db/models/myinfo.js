const mongoose = require("mongoose");
const validator = require("validator");

const myinfoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:4
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email is already taken"],
        validate(value){
            console.log(value);
            if(!validator.isEmail(value)){
                throw new Error("invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true
      
    },
    address:{
        type:String,
        required:true,
    }
})
// creating models
const myinfo= mongoose.model('myinfo',myinfoSchema);

module.exports=myinfo;