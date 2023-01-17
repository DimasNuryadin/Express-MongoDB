const express = require('express')
const router = express.Router()
const connection = require('./connection');

const db = connection.db("db_latihan");
const isConnected = { connected: false };

router.get('/', (req, res) => {
  console.log('Hello Word')
  res.json({
    message: 'GET berhasil'
  })
})

router.get("/users", async (req, res) => {
  try {
    if ((isConnected.connected = true)) {
      const users = await db.collection("users").find().toArray();
      res.send({ data: users });
    } else {
      res.send({ message: "Koneksi database gagal" });
    }
  } catch (err) {
    res.send({ message: err.message || "Internal server error" });
  }
});

module.exports = router;