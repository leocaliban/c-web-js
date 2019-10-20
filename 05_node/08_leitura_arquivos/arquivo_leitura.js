const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// Sincrono
const conteudoSync = fs.readFileSync(caminho, 'utf-8');
console.log(conteudoSync);

// Assincrono
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
});

fs.readdir(__dirname, (error, arquivos) => {
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
});