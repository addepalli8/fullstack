const express=require("express");
const app=express();
const PORT =process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send({hi:"there is a chaange"});
});
console.log(PORT);
app.listen(PORT);