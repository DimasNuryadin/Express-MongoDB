const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('Hello Word')
  res.json({
    message: 'GET berhasil'
  })
})

module.exports = router;