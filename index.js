const express = require('express')
const router = require('./routers')
const mongo = require("./mongodb");
const app = express()
const port = 4000

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

// Middleware, untuk memparsing req object pada body, sehingga mudah dibaca
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log('Rest berjalan di port : ', port)
})