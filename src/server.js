const proffys = [
  { name: "Thales Monteiro",
    avatar: "https://avatars1.githubusercontent.com/u/20719947?s=460&u=af34a508140033bbad586c34d8bfa3745b194fe2&v=4", 
    whatsapp: "21123456789", 
    bio: "Apaixonado por tornar ideias realizadas. Seu maior sonho é desenvolver uma IA de si mesmo para nunca mais passar raiva.", 
    subject: "Ciência da Computação", 
    cost: "20,00", 
    weekday: [0,6], 
    time_from: [720], 
    time_to: [1220]
  }
]

function pageLanding(req, res){
  return res.render("index.html")
}

function pageStudy(req, res){
  return res.render("study.html", {proffys})
}

function pageGiveClasses(req, res){
  return res.render("give-classes.html")
}

function pageError(req,res){
  res.status(404).render("not-found.html", {title: "Não foi possivel encontrar a página "+ req.url})
}

const express = require('express')
const server = express()

// nunjucks config
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

server
// static files config
.use(express.static("public"))
// application routes config
.get("/", pageLanding)
.get("/study/", pageStudy)
.get("/give-classes", pageGiveClasses)
.use(pageError)
.listen(5500)