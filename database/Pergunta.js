const Sequelize = require("sequelize");
const connection = require("./database");

// construção da tabela no banco de dados 
const Pergunta = connection.define('perguntas', {
    //JSON com as colunas da tabela.
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }

});

// criação da tabela no database 
Pergunta.sync({force:false}).then(()=>{});

//exportando o Model Perguntas 
module.exports = Pergunta;