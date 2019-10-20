// Spread em Objeto
const funcionario = { nome: 'Jack', salario: 900 };
const clone = { ativo: true, ...funcionario };

console.log(clone);

// Spread em array
const grupoA = ['Jack', 'Hector', 'James'];
const grupoFinal = ['Chapelli', 'Heitor', ...grupoA];
console.log(grupoFinal);