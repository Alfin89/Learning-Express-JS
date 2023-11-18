const express = require('express');
const res = require('express/lib/response');
const app =  express();

// app.use((req, res) => {
//     console.log('Hello Boss');
//     res.send({ nama : 'Alfin Kamil'});
//     // res.send(Buffer.from ('whoop'))
//     // res.status(500).send({ error: 'something blew up' })
// })


app.get('/user', function (req, res) {
    res.send('This Is user page');
})

app.get('/admin/:id', function (req, res) {
    console.log(req.params);
    res.send('This Is admin' + req.params.id);
})

app.get('/blog/:judul', (req, res) => {
    const { judul } = req.params;
    res.send(`Saya sedang melihat postingan : ${judul}`);
})

app.get('/home', (req, res) => {
    res.send(`<h1>This is homepage</h1>`);
})

app.post('/home', (req, res) => {
    res.send('This is post home');
})

app.get('*', (req, res) => {
    res.send('Unknowe page');
})



app.listen(8080, () => {
    console.log('Server is running 0n http://localhost:8080');;
})