const express= require("express")
const router = express.Router()

const linkProjetos = {
    "studio-sweet":"https://studio-sweet.vercel.app/",
}


router.get("/:name",(req,res)=>{
    const nomeProjeto = req.params.name
    const linkProjeto = linkProjetos[nomeProjeto]
    if(linkProjeto){
        res.redirect(linkProjeto)
    } else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write("<h1>Erro de Busca")
        res.end()
    }
})

module.exports = router
