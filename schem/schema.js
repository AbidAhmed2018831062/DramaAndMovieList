const { Decimal128 } = require("bson");
const express=require("express");
const mongoose=require("mongoose");


const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    actorName:
    {
        type:String,
        required:true
    },
    actressName:{
      type:String,
      required:true
    },
    what:{
        type:String,
        enum:["Watched","Upcoming","Remaining"]
    },
    date:{
        type:String,
        required:true
    }
});

module.exports=schema;
