const alunos = [
    { nome: 'Jack', nota: 7.3 },
    { nome: 'Kim', nota: 8.2 },
    { nome: 'Natasha', nota: 9.8 },
    { nome: 'Bryant', nota: 8.7 }
];

// Imperativo
let total = 0;
for (let index = 0; index < alunos.length; index++) {
    total += alunos[index].nota;
}
console.log(total / alunos.length);

// Declarativo
const obterNotas = aluno => aluno.nota;
const somar = (total, atual) => total + atual;
const retultado = alunos.map(obterNotas).reduce(somar);
console.log(retultado / alunos.length);