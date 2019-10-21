const http = require('http');

const getTurma = (letra, callback) => {
    const URL = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(URL, response => {
        let resultado = '';
        response.on('data', dados => {
            resultado += dados;
        });
        response.on('end', () => {
            callback(JSON.parse(resultado));
        });
    });
};

let nomes = [];
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));

    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`));

        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`));
            console.log(nomes);
        });
    });
});