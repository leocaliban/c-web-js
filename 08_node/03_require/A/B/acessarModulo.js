/**
 * Busca direta pelo arquivo
 */
const rootModule = require('../../rootModule');

console.log(rootModule.go);

/**
 * Usando módulos core
 */
const http = require('http');
http.createServer((requests, response) => {
    response.write('SERVER CREATED!');
    response.end();
}).listen(8080);

/**
 * Acessando módulos pelo index
 */
const c = require('../../C');

console.log(c.c);