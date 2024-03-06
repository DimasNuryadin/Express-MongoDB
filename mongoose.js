// File ini hanya untuk coba2 mongoose
const mongoose = require('mongoose');

// Fix Error
mongoose.set("strictQuery", false);

main().catch(err => console.log(err));

// required : untuk validasi, jika valuenya kosong data tidak bisa dikirim
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'nama tidak boleh kosong!!!']
//   },
//   age: {
//     type: Number,
//     required: [true, 'age tidak boleh kosong!!!']
//   },
//   status: {
//     type: String,
//     enum: ['active', 'non active'],
//     default: 'non active'
//   }
// });

// const User = mongoose.model('users', userSchema);

async function main() {
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  await mongoose.connect('mongodb://127.0.0.1:27017/db_latihan');

  console.log('Server database berhasil connect')

  // GET users
  // const users = await User.find();
  // console.log(users)

  // CREATE users
  // const newUser = await User.create({
  //   name: 'elfin',
  //   age: 24,
  //   status: 'active'
  // })
  // console.log(newUser)

  // CREATE users
  // const newUser = new User();
  // newUser.name = "Toa";
  // newUser.age = 30;
  // newUser.status = 'non active'
  // const insert = await newUser.save();
  // console.log(insert);

  // UPDATE users
  // const updateUser = await User.updateOne({ _id: '63cada7e9ffab5ee0e29c21c' }, { name: 'tio saputra' })
  // console.log(updateUser)

  // UPDATE users
  // const updateUser = await User.findById('63cada7e9ffab5ee0e29c21c')
  // updateUser.name = 'tios'
  // const update = await updateUser.save()
  // console.log(update)

  // DELETE users
  // const deleteUser = await User.deleteOne({ _id: '63cada7e9ffab5ee0e29c21c' })
  // console.log(deleteUser)
}

// File ini tidak di eksport karena hanya cukup dijalankan sekali