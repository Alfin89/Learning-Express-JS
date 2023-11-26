const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/product').then(() => {
  console.log("Connected to Mongodb");
}).catch((err) => {
  console.log(err);
});

const personSchema = mongoose.Schema({
    firstName : String,
    lastName  : String,
})

personSchema.virtual('fullName').get(function() {
    return `${this.firstName}  ${this.lastName}`
})

// Middleware
personSchema.pre('save', async function() {
    console.log('Persiapan menyimpan');
})

personSchema.post('save', async function() {
    console.log('Data berhasil di simpan');
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    firstName: "ALfin",
    lastName: "Kamil",
})

console.log(person.fullName);

person.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});