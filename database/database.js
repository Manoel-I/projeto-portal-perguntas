//chamando o Sequelize
const Sequelize = require('sequelize');

// configurando a coneção com o banco de dados
const connection = new Sequelize('projeto_perguntas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//exportando a connection
module.exports = connection;