const mysql = require('mysql2');

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


