const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname,"public")))
const base = path.join(__dirname,"public")



app.get("/",(req,res)=>{
  res.sendFile(`${base}/index.html`)
})

app.get("/Inicio",(req,res)=>{
  res.sendFile(`${base}/indexs2.html`)
})


app.listen(PORT,()=>{
  console.log("Run")
})