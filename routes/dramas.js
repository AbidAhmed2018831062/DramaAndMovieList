const express=require("express");
dramas=express.Router();
const mongoose=require("mongoose");
const schema=require("H:/PHP/htdocs/Js/DramaandMovieList/schem/schema");
const dra=mongoose.model("Dramas",schema);

dramas.get("/addDrama",(req,res)=>{
    const dram=null;
    res.render("addDrama",{dram});
});
dramas.get("/upcoming",async(req,res)=>{
    const result=await dra.find({what:"Upcoming"}).clone();
    res.render("index",{
        dramas:result
    });
});
dramas.post("/searchResult",async(req,res)=>{
    const search=req.body.search;
    const res1=await dra.find({}).clone();

    const result=[];
    res1.forEach(e=>{
        if(e.actressName.includes(search)||e.actorName.includes(search)||e.rating.includes(search)||e.name.includes(search)||e.what.includes(search)||e.date.includes(search))
        {
            result.push(e);
        }

    });
    result.sort((a,b)=>{
        let j=parseFloat(a.rating);
        let k=parseFloat(b.rating);
        return k-j;
    })
    res.render("index",{dramas:result});
});

dramas.get("/update",async(req,res)=>{
    try{
        console.log(req.query.id);
       
      // console
    const dram= await dra.findById({_id:req.query.id});
    res.render("addDrama",{dram:dram});
    }
    catch{

    }
})

dramas.post("/update",async(req,res)=>{
    await dra.findByIdAndUpdate({_id:req.query.id},{$set:{
        name:req.body.name,
        rating:req.body.rating,
        actorName:req.body.actorName,
        actressName:req.body.actressName,
        what:req.body.what,
        date:req.body.date
    }
  });
  res.redirect("/");
})

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