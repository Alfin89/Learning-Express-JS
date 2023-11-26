const mongoose = require('mongoose')
const express = require('express')
const app = express()
const post = 5000

// Connection Mongodb
mongoose.connect('mongodb://127.0.0.1:27017/movie').then(() => {
  console.log("Connected to Mongodb");
}).catch((err) => {
  console.log(err);
});


// Schema model 
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    director: String,
})

const Movie = mongoose.model('Movie', movieSchema)
/*
const movie = new Movie({
    title : "Sarah",
    year: 2003,
    score: 10,
    director: "Al-quddus"
})

movie.save()

console.log(movie); */


// Insert methode
/*  Movie.insertMany([
  {
    "title": "Matahari",
    "year": 2010,
    "score": 8.5,
    "director": "Riri Riza"
  },
  {
    "title": "Laskar Pelangi",
    "year": 2008,
    "score": 9.0,
    "director": "Riri Riza"
  },
  {
    "title": "Gie",
    "year": 2005,
    "score": 8.2,
    "director": "Riri Riza"
  },
  {
    "title": "AADC 2",
    "year": 2016,
    "score": 7.8,
    "director": "Hanung Bramantyo"
  },
  {
    "title": "Dilan 1990",
    "year": 2018,
    "score": 8.6,
    "director": "Pidi Baiq"
  },
  {
    "title": "Ayat-Ayat Cinta",
    "year": 2008,
    "score": 8.0,
    "director": "Hanung Bramantyo"
  },
  {
    "title": "Habibie & Ainun",
    "year": 2012,
    "score": 8.3,
    "director": "Faozan Rizal"
  },
  {
    "title": "Perahu Kertas",
    "year": 2012,
    "score": 7.6,
    "director": "Hanung Bramantyo"
  },
  {
    "title": "My Stupid Boss",
    "year": 2016,
    "score": 7.2,
    "director": "Upi Avianto"
  },
  {
    "title": "Dua Garis Biru",
    "year": 2019,
    "score": 8.1,
    "director": "Gina S. Noer"
  }
]).then(() => {
  console.log("Data berhasil di insert");
}).catch((err) => {
  console.log(err);
}); */


// Read database
/*  Movie.find({ year: 2012, director: 'Hanung Bramantyo'}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
}); */

// Update 
// Movie.updateOne({id: '655e68cadf4812131d4df92d'}, {score:49}).then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });

// delete
Movie.deleteMany({title: 'Matahari'}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
