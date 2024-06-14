const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser')

var login = 'admin'
var password = '123456'

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    })

router.get('/sobre', function(req,res){
    res.sendFile(path.join(__dirname+'/sobre.html'));
    })

router.get('/login', function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
    })

app.post('/', (req, res)=> {
    
    if(req.body.password == password && req.body.login == login){
        //Logado com Sucesso!
        req.session.login = login;
        res.redirect('/');
    }
})

app.get('/', (req, res) =>{
    if(req, session.login){
        res.render('Logado!');
    }else{
        res.render('index');
    }
})

app.listen(port, ()=>{
    console.log('Função rodando!');
})

app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);
app.listen(process.env.port || 3000);
console.log('Servidor Rodando!, Para parar basta Dar um "Ctrl + C"');