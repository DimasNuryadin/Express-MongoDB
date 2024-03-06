// Menerapkan ODM atau Mongoose
const express = require('express');
const router = express.Router()

require('./mongoose')
const User = require('./User')

router.get('/', (req, res) => {
  console.log('Hello Word')
  res.json({
    message: 'GET berhasil'
  })
})

router.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    res.send({ data: users })
  } catch (err) {
    res.send({ message: err.message || "Internal server error" });
  }
})

router.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const users = await User.findOne({ _id: id })
    if (users) {
      res.send({
        data: users
      })
    } else {
      res.send({
        message: 'User tidak ditemukan'
      })
    }
  } catch (err) {
    res.send({ message: err.message || "Internal server error" });
  }
})

router.post('/users', async (req, res) => {
  try {
    const { name, age, status } = req.body;
    const users = await User.create({
      name,
      age,
      status
    })
    res.send({
      data: users
    })
  } catch (err) {
    res.send({ message: err.message || "Internal server error" });
  }
})

router.patch('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, status } = req.body;
    const users = await User.updateOne({ _id: id }, {
      name,
      age,
      status
    }, { runValidators: true })

    if (users) {
      res.send({
        data: users
      })
    } else {
      res.send({
        message: 'User tidak ditemukan'
      })
    }
  } catch (err) {
    res.send({ message: err.message || "Internal server error" });
  }
})

router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.deleteOne({ _id: id })
    if (users) {
      res.send({
        data: users
      })
    } else {
      res.send({
        message: 'User tidak ditemukan'
      })
    }
  } catch (err) {
    res.send({ message: err.message || "Internal server error" });
  }
})

module.exports = router;