const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");


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
    res.render("index.ejs",{
        // lista de variaveis 
        
    });
});

app.get("/perguntas", (req, res) =>{
    res.render("perguntas.ejs",{
        
    });
});

app.post("/salvar_respostas", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    
    res.send("titulo: "+ titulo+ "<br>descriçaõ: "+descricao);
    
});

app.listen(8080, ()=>{console.log("aplicação funcionando")});