const express = require('express')
const app = express()
const port = 8000

app.get('/confirmados', (req, res) => {
  res.send("Olá mundo niver zuzu!")
})

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})

const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: 'zuriniver@hotmail.com',
    pass: 'bobesponja@000',
  }
});

transporter.sendMail({
  from: 'zuriniver@hotmail.com',
  to: 'claravasques@hotmail.com',
  subject: 'NOVOS CONFIRMADOS!!!',
  html: '<p>Oie!! Acabaram de chegar novos confirmados</p>',
})
.then(() => console.log('deu bom'))
.catch(() => console.log('deu ruim'))









// const express = require('express')
// const app = express()
// const port = 8000

// app.get('/', (req, res) => {
//   // res.send("Olá mundo niver zuzu! BORAAA")
//   res.sendFile(__dirname + '/sim.html')
// })

// app.get('/confirmado', (req, res) => {
//   res.send("Uhul!! Nos vemos lá")
// })

// app.listen(port, () => {
//   console.log(`Escutando a porta ${port}`)
// })



















