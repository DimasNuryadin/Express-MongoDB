const express = require('express')
const router = require('./routers')
const app = express()
const port = 4000

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log('Rest berjalan di port : ', port)
})