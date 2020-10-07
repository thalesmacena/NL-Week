const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
  proffyValue = {
    name: "Thales Monteiro",
    avatar: "https://avatars1.githubusercontent.com/u/20719947?s=460&u=af34a508140033bbad586c34d8bfa3745b194fe2&v=4", 
    whatsapp: "21123456789", 
    bio: "Apaixonado por tornar ideias realizadas. Seu maior sonho é desenvolver uma IA de si mesmo para nunca mais passar raiva." 
  }

  classValue = {
    subject: "Ciência da Computação", 
    cost: "20,00"
  }

  classScheduleValues = [
    {
      weekday: 1, 
      time_from: 720, 
      time_to: 1220
    },
    {
      weekday: 6, 
      time_from: 520, 
      time_to: 1220
    }
  ]

  await createProffy(db, {proffyValue,classValue,classScheduleValues})

})