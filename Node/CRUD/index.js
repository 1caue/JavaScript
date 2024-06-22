const express = require('express');
const server = express();

server.use(express.json());
const cursos = ['Full Stack Master', 'Desenvolvimento de Games', 'Viver de YouTube'];

// Retorna Curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params

    return res.json(cursos[index]);
});

// Retornar Todos os Cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

// Criar um novo Curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);
    
    return res.json(cursos);
});

// Update
server.put('/cursos/index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

// Excluir
server.delete('/cursos/index', (req, res) => {
    const { index } = req.params

    cursos.splice(index, 1);
    return res.json({message: "O curso foi deleteado"})
});


server.listen(300);