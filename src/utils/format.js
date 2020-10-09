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

function getSubject(subjectNumber){
  const arrayPosition = +subjectNumber - 1
  return subjects[arrayPosition]
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(':')
  return Number(+minutes +(hour * 60) )
} 

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}