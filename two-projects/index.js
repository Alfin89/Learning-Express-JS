const express = require('express');
const path = require('path');
const app = express();

const Bigdata = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));


// Route
app.get('/', (req, res) => {
    const wmk = [
        'Alfin kamil', 'Habiburrohman', 'Rohman', 'Ulfa', 'Waid',
    ]
    res.render('home', { wmk })
})

app.get('/random', (req, res) => {
    const number = Math.floor(Math.random() * 100 ) + 1;
    res.render('random', { number })
})

app.get('/parsing/:id', (req, res) => {
    const { id } = req.params;
    const data = Bigdata[id];
    if (data) {
        res.render('parsing', { data })
    } else {
        res.render('notfound', { id })
    }
})

// app.listen(3000, () => {
//     console.log('server is running is http://localhost:3000');
// })

const server = app.listen(3000, () => {
    console.log(`The application started on port ${server.address().port}`);
});