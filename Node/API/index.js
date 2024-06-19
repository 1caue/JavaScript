const express = require('express');
const server = express();
const filmes = require('C:\\Users\\CAUÊ\\Documents\\Js\\Node\\API\\src\\data\\filmes.json');

server.get('/filmes', (req,res) => {
    return res.json({filmes})
});

server.listen(3000, () =>{
    console.log('Servidor está Funcionando...Para parar-ló digite CTRL+C')
});