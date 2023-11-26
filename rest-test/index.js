var methodOverride = require('method-override')
const { v4: uuidv4 } = require('uuid')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Configuration Views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// Middleware
app.use(express.urlencoded({ extended : true }))
app.use(methodOverride('_method'))
app.use(express.json())

// Listen
app.listen(port, () => {
    console.log(`Server is running : http://localhost:${port}`)
})

// Route
app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/order', (req, res) => {
    res.render('pages/create')
})

app.post('/order', (req, res) => {
    const { name, quantity } = req.body;
    res.render('pages/create', { name, quantity })
})

app.get('/comment', (req, res) => {
    // const comment = comments;
    res.render('pages/comment/index', { comments })
})

app.get('/comment/create', (req, res) => {
    res.render('pages/comment/create')
})

app.post('/comment', (req, res) => {
    const { username, text } = req.body;
    comments.push({ username, text , id: uuidv4()})
    res.redirect('/comment')
})

app.get('/comment/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('pages/comment/view', { comment })
})

app.get('/comment/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('pages/comment/edit', { comment })
})

app.patch('/comment/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.text;
    const foundComment = comments.find(c => c.id === id)
    foundComment.text = newComment;
    console.log(newComment);
    console.log(foundComment);
    res.redirect('/comment')
})

app.delete('/comment/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comment')
});

// data
let comments = [
    {
        id : uuidv4(),
        username : "ALfin kamil",
        text : "apa yang bisa saya bantu",
    },
    {
        id : uuidv4(),
        username : "Diyah",
        text : "Saya tidak butuh bantunmu",
    },
    {
        id : uuidv4(),
        username : "Sahrul",
        text : "Kebanyakan bacot lo, sini kalo berani lawan aku",
    },
    {
        id : uuidv4(),
        username : "Haidar",
        text : "Jangan terlalu gegabah sahrul, tidak baik emosi seperti itu",
    },
    {
        id : uuidv4(),
        username : "Waid",
        text : "Lanjutkan saja sahrul biar ketahuan siapa di antara mereka yang berani",
    },
    {
        id : uuidv4(),
        username : "Jauhary",
        text : "Ayo siapa takut, aku selalu siap berperang dengan siapapun itu.",
    },
];