// here we define structure of a object by using schema ...

const mongoose = require("mongoose");

const todoSchema =new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLeangth:50,
        },
        description: {
            type:String,
            required:true,
            maxLeangth:50,
        },
        
    },{timestamps:true}
);
// schema is a description of your data...

module.exports =mongoose.model("todo",todoSchema);//is model ko todo ke naam sey use hoga isey use karega controller