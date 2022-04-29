const express=require("express");
dramas=express.Router();
const mongoose=require("mongoose");
const schema=require("H:/PHP/htdocs/Js/KoreanDrama/schem/schema");
const dra=mongoose.model("Dramas",schema);

dramas.get("/addDrama",(req,res)=>{
    res.render("addDrama");
});

dramas.post("/",async (req,res)=>{

    dra.insertOne(req