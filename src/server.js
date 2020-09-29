require('express')()
.get("/", (req, res) => {
  return res.send("index.html")
})
.get("/study", (req,res) => {
  return res.send("study.html")
})
.get("/give-classes", (req,res) => {
  return res.send("give-classes.html")
})
.listen(5500)