const express = require('express');
const cors = require('cors');
const app = express();

const contatos = [
        {
            "nome": "Bruno",
            "telefone": "9999-3333",
            "data": "2015-04-12T12:53:46.2042",
            "operadora": {
                "nome": "Oi",
                "codigo": 14,
                "categoria": "Celular"
            }
        },
        {
            "nome": "Sandra",
            "telefone": "9999-4444",
            "data": "2015-04-12T12:53:46.2042",
            "operadora": {
                "nome": "Vivo",
                "codigo": 15,
                "categoria": "Celular"
            }
        },
        {
            "nome": "Mariana",
            "telefone": "5555-2222",
            "data": "2015-04-12T12:53:46.2042",
            "operadora": {
                "nome": "Tim",
                "codigo": 41,
                "categoria": "Celular"
            }
        }
];

app.use(cors());

app.get('/contatos', (req, res) => {
    res.json(contatos);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('LINK: http://127.0.0.1:5500/Ajax/ajax.html');
});