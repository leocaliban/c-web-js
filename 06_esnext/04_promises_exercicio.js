const http = require('http');

const getTurma = (letra) => {
    const URL = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, reject) => {
        http.get(URL, response => {
            let resultado = '';
            response.on('data', dados => {
                resultado += dados;
            });
            response.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (error) {
                    reject(error);
                }
            });
        });
    });
};

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(error => console.log(error.message));