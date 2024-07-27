const express = require('express');
const fs = require('fs');
const app = express();
const port = 500;

app.get('/data', (req, res) => {
    fs.readFile('contatos.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.setHeader('Content-type', 'aplication/json');
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});