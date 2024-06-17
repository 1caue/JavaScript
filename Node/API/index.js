const express = require('express');
const server = express();

server.get('/', (req,res) => {
    return res.json({usuário: 'Master 1'})
});

server.listen(3000, () =>{
    console.log('Servidor está Funcionando... Para parar-ló digite CTRL+C')
});