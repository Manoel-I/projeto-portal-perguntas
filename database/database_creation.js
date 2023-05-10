var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "projeto_perguntas":*/
  con.query("CREATE DATABASE IF NOT EXISTS projeto_perguntas ", function (err, result) {
    if (err) throw err;
    console.log("Database created or already exists");
  });
});