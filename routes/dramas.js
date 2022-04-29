const express=require("express");
dramas=express.Router();
const mongoose=require("mongoose");
const schema=require("H:/PHP/htdocs/Js/DramaandMovieList/schem/schema");
const dra=mongoose.model("Dramas",schema);

dramas.get("/addDrama",(req,res)=>{
    res.render("addDrama");
});

dramas.post("/",async (req,res)=>{
try{
    console.log("Hey");
    const t=new dra(req.body);
    console.log(t);
   await t.save();
    res.redirect("localhost:4000/");
}
catch(err){
console.log(err);
}






});
module.exports=dramas;