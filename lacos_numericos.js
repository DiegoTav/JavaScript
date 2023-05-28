//FOR

const input = require('readline-sync');


for (let i = 0; i <= 4; i++) {
    console;console.log("repeticao", i);

}

for(let i = 12; i > 8; i--){
    console.log('OH may gah',i)
}

console.clear()

let nota;
let soma = 0;

for (i = 1; i <= 3; i++){
    nota =Number(input.question(`informe a nota ${i} do aluno: `))

    soma += nota;
}

console.log(`A média do aluno é ${soma / 3}.`);