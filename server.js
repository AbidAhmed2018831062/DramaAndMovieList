const express=require("express");
const mongoose=require("mongoose");
const dramas=require("./routes/dramas");
const app=express();
app.use(express.urlencoded({extended:false}))
mongoose.connect("mongodb://localhost/dramas",{

}).then(()=>console.log("Connection successful")).catch(err=>console.log(err));
app.use(express.static(__dirname+'/public'));

app.use("/css",express.static(__dirname+'/public/css'))
app.set("view engine","ejs");
app.use("/drama",dramas);
app.get("/",async (req,res)=>{
    const allDrama=await mongoose.model("Dramas").find().clone().catch(err=>console.log(err));

    allDrama.sort((a,b)=>{
        let j=parseFloat(a.rating);
        let k=parseFloat(b.rating);
        return k-j;
    })
    res.render("index",{dramas:allDrama});
})

app.listen(4000,()=>{
    console.log("Listenting on port 4000Kdrama");
})