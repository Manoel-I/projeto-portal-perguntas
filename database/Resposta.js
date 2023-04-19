const connection = require("./database");
const Sequelize = require("sequelize");

const Resposta = connection.define('respostas', {
    resposta_text :{
        type : Sequelize.TEXT,
        allowNull : false //esse campo nunca pode ser vazio 
    },
    id_pergunta :{
        type : Sequelize.INTEGER,
        allowNull : false
    }
});


Resposta.sync({force:false}).then(()=>{});


module.exports = Resposta;