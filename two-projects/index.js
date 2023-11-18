const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// Route
app.get('/', (req, res) => {
    res.render('home')
})

// app.listen(3000, () => {
//     console.log('server is running is http://localhost:3000');
// })

const server = app.listen(3000, () => {
    console.log(`The application started on port ${server.address().port}`);
});