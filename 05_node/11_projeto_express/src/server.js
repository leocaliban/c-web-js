const port = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (request, response, next) => {
    response.send(db.getProdutos());
});

app.get('/produtos/:id', (request, response, next) => {
    response.send(db.getProduto(request.params.id));
});

app.post('/produtos', (request, response, next) => {
    const produto = db.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    });
    response.send(produto);
});

app.put('/produtos/:id', (request, response, next) => {
    const produto = db.salvarProduto({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco
    });
    response.send(produto);
});

app.delete('/produtos/:id', (request, response, next) => {
    const produto = db.deleteProduto({
        id: request.params.id
    });
    response.send(produto);
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
});