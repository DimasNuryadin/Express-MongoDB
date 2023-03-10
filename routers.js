const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router()
const connection = require('./connection');

const db = connection.db("db_latihan");
const isConnected = { connected: false };

// Export mongoose
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

// router.get("/users", async (req, res) => {
//   try {
//     if ((isConnected.connected = true)) {
//       const users = await db.collection("users").find().toArray();
//       res.send({ data: users });
//     } else {
//       res.send({ message: "Koneksi database gagal" });
//     }
//   } catch (err) {
//     res.send({ message: err.message || "Internal server error" });
//   }
// });

// router.post("/users", async (req, res) => {
//   try {
//     if ((isConnected.connected = true)) {
//       const { name, age, status } = req.body;
//       const users = await db.collection("users").insertOne({
//         name,
//         age,
//         status
//       })
//       // console.log("users : ", users)
//       res.send({ message: 'data berhasil ditambahkan' });
//     } else {
//       res.send({ message: "Koneksi database gagal" });
//     }
//   } catch (err) {
//     res.send({ message: err.message || "Internal server error" });
//   }
// });

// router.patch("/users/:id", async (req, res) => {
//   try {
//     if ((isConnected.connected = true)) {
//       const { id } = req.params;
//       const { name, age, status } = req.body;
//       const users = await db.collection("users").updateOne({ _id: ObjectId(id) }, {
//         $set: {
//           name,
//           age,
//           status,
//         }
//       })
//       // console.log("users : ", users)
//       if (users.modifiedCount === 1) {
//         res.send({ message: 'data berhasil diubah' })
//       } else {
//         res.send({ message: 'gagal mengubah' })
//       }
//     } else {
//       res.send({ message: "Koneksi database gagal" });
//     }
//   } catch (err) {
//     res.send({ message: err.message || "Internal server error" });
//   }
// });

// router.delete("/users/:id", async (req, res) => {
//   try {
//     if ((isConnected.connected = true)) {
//       const { id } = req.params;
//       const users = await db.collection("users").deleteOne({ _id: ObjectId(id) })
//       if (users.deletedCount === 1) {
//         res.send({ message: 'data berhasil dihapus' })
//       } else {
//         res.send({ message: 'data gagal dihapus' })
//       }
//       // console.log("users : ", users)
//     } else {
//       res.send({ message: "Koneksi database gagal" });
//     }
//   } catch (err) {
//     res.send({ message: err.message || "Internal server error" });
//   }
// });

module.exports = router;