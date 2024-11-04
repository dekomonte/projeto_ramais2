const express = require('express')
const mysql = require('mysql2');

const app = express()

app.listen(3000,() =>{
    console.log('Server is running on port 3000')
});

app.get('/', (req, res) => {
    res.send("Hello from Node API");
});


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Flamengo_2019$@',
  database: 'bd_ramais'
});

connection.connect((err) => {
  if (err) {
    return console.error('Erro ao conectar:', err.message);
  }
  console.log('Conectado ao MySQL com sucesso!');
});