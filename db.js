const app = require('express')()
const cors = require('cors')
const mysql = require('mysql2')

app.use(cors())

// Connect to database
const db = mysql.createConnection({
    user: 'root',
    password: 'password',
    host: 'localhost',
    database: 'drippydenims'
})

// Start backend server
app.listen(3001, () => {
    console.log('Backend server started at 3001');
})

app.get('/products/:id', (req,res) => {
    let sql = `select * from products where id=${req.params.id}`;
    db.query(sql, (err, result)=>{
        res.type('application/json')
        res.send(result)
    })
})

app.get('/products/gender/:gender', (req,res) => {
    let sql = `select * from products where gender='${req.params.gender}'`;
    db.query(sql, (err, result)=>{
        res.type('application/json')
        res.send(result)
    })
})

app.get('/products', (req,res) => {
    let sql = 'select * from products;';
    db.query(sql, (err, result)=>{
        res.type('application/json')
        res.send(result)
    })
})

app.get('/products/onSale', (req,res) => {
    let sql = 'select * from products where onSale=1';
    db.query(sql, (err, result)=>{
        res.type('application/json')
        res.send(result)
    })
})