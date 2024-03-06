// Membuat schema terpisah agar lebih rapih
const mongoose = require('mongoose')

// required : untuk validasi, jika valuenya kosong data tidak bisa dikirim
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'nama tidak boleh kosong!!!']
  },
  age: {
    type: Number,
    required: [true, 'age tidak boleh kosong!!!']
  },
  status: {
    type: String,
    enum: ['active', 'non active'],
    default: 'non active'
  }
});

const User = mongoose.model('users', userSchema);

module.exports = User