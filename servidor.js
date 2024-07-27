const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const rotaProjeto = require("./Router/rotas")

app.use(express.static(path.join(__dirname,"public")))
const base = path.join(__dirname,"public")

app.use("/projeto", rotaProjeto)
// https://studio-sweet.vercel.app/

app.get("/",(req,res)=>{
  res.sendFile(`${base}/index.html`)
})

app.get("/Inicio",(req,res)=>{
  res.sendFile(`${base}/indexs2.html`)
})

app.use((req,res,next)=>{
  res.status(404).sendFile(`${base}/404.html`)
})


app.listen(PORT,()=>{
  console.log("Run")
})