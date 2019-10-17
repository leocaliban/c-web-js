const escola = [
    {
        nome: 'Turma M1',
        alunos: [
            {
                nome: 'Jack',
                nota: 8.1
            },
            {
                nome: 'Kim',
                nota: 9.3
            },
        ]
    },
    {
        nome: 'Turma M2',
        alunos: [
            {
                nome: 'Rosalia',
                nota: 8.9
            },
            {
                nome: 'Nina',
                nota: 7.3
            },
        ]
    }
];

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas = escola.map(getNotasDaTurma);
console.log(notas);

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback));
};

const notasFlat = escola.flatMap(getNotasDaTurma);
console.log(notasFlat);