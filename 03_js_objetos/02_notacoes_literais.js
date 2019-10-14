const nome = 'Jack';
const idade = 40;

// Substitui -> { nome:nome, idade:idade }
const pessoa = { nome, idade };
console.log(pessoa);

const nomeAttr = 'nota';
const valorAttr = 8;

const obj = {};
obj[nomeAttr] = valorAttr;
console.log(obj);

const obj2 = { [nomeAttr]: valorAttr };
console.log(obj2);