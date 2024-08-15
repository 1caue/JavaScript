const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const contatos = [
    {
        "nome": "Bruno Felipe de Oliveira",
        "telefone": "9999-3333",
        "data": "2015-04-12T12:53:46.2042",
        "operadora": {
            "nome": "Oi",
            "codigo": 14,
            "categoria": "Celular"
        }
    },
    {
        "nome": "Sandra Pereira Santos",
        "telefone": "9999-4444",
        "data": "2015-04-12T12:53:46.2042",
        "operadora": {
            "nome": "Vivo",
            "codigo": 15,
            "categoria": "Celular"
        }
    },
    {
        "nome": "Mariana Julia Paixao",
        "telefone": "5555-2222",
        "data": "2015-04-12T12:53:46.2042",
        "operadora": {
            "nome": "Tim",
            "codigo": 41,
            "categoria": "Celular"
        }
    },
    {
        "nome": "Julio Cesar Franco",
        "telefone": "4455-2286",
        "data": "2015-04-12T12:53:46.2042",
        "operadora": {
            "nome": "Vivo",
            "codigo": 15,
            "categoria": "Celular"
        }
    }
];

const operadoras = [
    {
        "nome": "OI",
        "codigo": 14,
        "categoria": "Celular",
        "operadora": 2
    },
    {
        "nome": "Vivo",
        "codigo": 15,
        "categoria": "Celular",
        "operadora": 1
    },
    {
        "nome": "Tim",
        "codigo": 41,
        "categoria": "Celular",
        "operadora": 3
    },
    {
        "nome": "GVT",
        "codigo": 25,
        "categoria": "Fixo",
        "operadora": 1
    },
    {
        "nome": "Embratel",
        "codigo": 21,
        "categoria": "Fixo",
        "operadora": 2
    }
];

app.use(cors());
app.use(bodyParser.json());

app.get('/operadoras', (req, res) => {
    res.json(operadoras);
});

app.get('/contatos', (req, res) => {
    res.json(contatos);
});

app.post('/contatos', (req, res) => {
    const contato = req.body;
    contatos.push(contato);
    res.status(201).json(contato);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('-----------------------------------')
    console.log(`Server is running on port ${PORT}`);
    console.log('LINK DO SERVIDOR: http://127.0.0.1:5500/Ajax/ajax.html');
    console.log('LINK DO SERVIDOR DOS CONTATOS: http://localhost:3000/contatos');
    console.log('LINK DO SERVIDOR DAS OPERADORAS: http://localhost:3000/operadoras');
});

