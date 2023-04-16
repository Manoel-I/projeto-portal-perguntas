const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//importação do model pergunta
const Pergunta = require("./database/Pergunta");


connection
    .authenticate()
    .then(()=>{
        console.log("conexão feita com o DB")
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    })


// falando para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'));

//configuração do body-parser
app.use(bodyParser.urlencoded({extended: false}));// decodifica os dados
app.use(bodyParser.json());// permite leitura de dados json

//ROTAS_____________________
// definição de rota com o node.js
app.get("/", (req, res) =>{
    // o express mandar a resposta de renderizar o arquivo na pasta "views" 
    // chamado "index"

    //o que for achado no banco irá para dentro da variavel "perguntas" 
        // raw: true = retorna uma pesquisa "crua/raw"- somente com as infos da tabela do banco de dados
    Pergunta.findAll({raw: true}).then(perguntas =>{
      
        res.render("index.ejs",{
            // lista de variaveis 
            perguntas: perguntas
        });
    
    });// equivalente Select
    
});

app.get("/perguntas", (req, res) =>{
    res.render("perguntas.ejs",{
        
    });
});

app.post("/salvar_respostas", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    
    // o metodo create funciona como um insert 
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/")
    });
    
});

app.listen(8080, ()=>{console.log("aplicação funcionando")});