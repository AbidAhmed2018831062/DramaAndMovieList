const express=require("express");
const mongoose=require("mongoose");
const dramas=require("./routes/dramas");
const app=express();

mongoose.connect("mongodb://localhost/article",{

}).then(()=>console.log("Connection successful")).catch(err=>console.log(err));
app.use(express.static(__dirname+'/public'));

app.use("/css",express.static(__dirname+'/public/css'))
app.set("view engine","ejs");
app.use("/drama",dramas);
app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(4000,()=>{
    console.log("Listenting on port 4000Kdrama");
})