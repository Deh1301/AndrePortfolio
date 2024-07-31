const express= require("express")
const router = express.Router()

const linkProjetos = {
    "studio-sweet":"https://studio-sweet.vercel.app/",
    "cronometro" : "https://cronometro-projeto-rust.vercel.app/"
}


router.get("/:name",(req,res)=>{
    const nomeProjeto = req.params.name
    const linkProjeto = linkProjetos[nomeProjeto]
    if(linkProjeto){
        res.redirect(linkProjeto)
    }
})


module.exports = router
