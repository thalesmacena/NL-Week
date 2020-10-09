const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses, pageError} = require('./pages')

// nunjucks config
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

server
// static files config
.use(express.static("public"))
//
.use(express.urlencoded({extended: true}))
// application routes config
.get("/", pageLanding)
.get("/study/", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/give-classes", saveClasses)
.use(pageError)
// start server
.listen(5500)