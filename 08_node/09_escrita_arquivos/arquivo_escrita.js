const fs = require('fs');

const produto = {
    nome: 'Celular',
    valor: 1199.00,
    desconto: 0.15
};

fs.writeFile(__dirname + '/arquivoCriado.json', JSON.stringify(produto), error => {
    console.log(error || 'Arquivo salvo!');
});