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

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
  "Ciência da Computação"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]

function pageLanding(req, res){
  return res.render("index.html")
}

function pageStudy(req, res){
  const filters = req.query
  return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
  const data = req.query
  if (Object.keys(data).length > 0){
    proffys.push(data)
    return res.redirect("/study")
  } 

  return res.render("give-classes.html", {subjects, weekdays})
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