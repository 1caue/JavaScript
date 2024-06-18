const express = require('express');
const server = express();
const filmes = require('/scr/data/filmes.json');

server.get('/filmes', (req,res) => {
    return res.json({filmes})
});

server.listen(3000, () =>{
    console.log('Servidor está Funcionando...Para parar-ló digite CTRL+C')
});