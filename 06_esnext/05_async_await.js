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

let obterAlunos = async () => {
    const turmaA = await getTurma('A');
    const turmaB = await getTurma('B');
    const turmaC = await getTurma('C');
    return [].concat(turmaA, turmaB, turmaC);
}; // Retorna objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    .catch(error => console.log(error.message));