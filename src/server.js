const express = require('express')
const server = express()

const proffys = [
  { name: "Thales Monteiro",
    avatar: "https://avatars1.githubusercontent.com/u/20719947?s=460&u=af34a508140033bbad586c34d8bfa3745b194fe2&v=4", 
    whatsapp: "21123456789", 
    bio: "Apaixonado por tornar ideias realizadas.<br><br>Seu maior sonho é desenvolver uma IA de si mesmo para nunca mais passar raiva.", 
    subject: "Ciência da Computação", 
    cost: "20", 
    weekday: [0,6], 
    time_from: [720], 
    time_to: [1220]
  }
]

function pageLanding(req, res){
  return res.sendFile(__dirname + "/views/index.html")
}

function pageStudy(req, res){
  return res.sendFile(__dirname + "/views/study.html")
}

function pageGiveClasses(req, res){
  return res.sendFile(__dirname + "/views/give-classes.html")
}

function pageError(req,res){
  res.status(404).sendFile(__dirname + "/views/not-found.html")
}


server.use(express.static("public"))
.get("/", pageLanding)
.get("/study/", pageStudy)
.get("/give-classes", pageGiveClasses)
.use(pageError)
.listen(5500)