
const input = require('readline-sync');

const sorteado = 5;

let n = Number(input.question('Escolha um numero '));

console.log(n, typeof n);

while (n !== sorteado){
    console.log("Errou, tente de novo... ");

    n = Number(input.question('Escolha um numero '));
}

console.log('acertou');