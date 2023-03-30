const express = require("express");
const app = express();
const Image = require("./user");
const Cors = require("cors");
app.use(express.json());
const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://utkarsh:Utkarsh%40123@cluster0.3p9w8b1.mongodb.net/test");
 } 
catch (error) {
   handleError(error);
 }
app.use(Cors());
app.post("/home",async(req,res)=>{
    let image = new Image(req.body);
     let result = await image.save();
     res.send(result);  
})

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})
