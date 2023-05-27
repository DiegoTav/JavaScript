// Coerção (conversao) de tipos

// 1 - Coersao Explicita (Manual)

const num  = 10;

console.log(num, typeof num);

const nParaStr = String(num);
console.log(nParaStr, typeof nParaStr);

console.log(Number('12345'));  //12345 (melhor)
console.log(parseFloat('1234.234')); //1234.234
console.log(parseInt('1234.234'));  //1234
console.log(Boolean(1234.234)); //true (0 false)

console.clear();
// 2 - Coersao Implicita (Automatica)

console.log(10 + 1); //11
console.log(10 + '1'); //101 (converte tudo para texto e concatena)
console.log('10' - 1); //9
console.log(10 * '3'); //30
console.log(10 - 'aaaa'); // NaN (not a number)

// Outros Exemplos

let n = 1 + "1"; //'11'
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + "5");  // 95
console.log("5" + 2 + 3 + 4); // 5234
console.log("10" - "4" - "3" - 2 + "5"); // 15
