//PARTE 1

let dados = ['Diego', 24, 1.80, true];

//Obter tamanho do array

console.log('tamanho do array', dados.length);

console.clear();
//Percorrer arrays

for (let i =0; i < dados.length; i++ ){
    console.log(dados[i])
}
console.clear();

//~ A cada interacao pegue um elemento do array
for(let elemento of dados){
    console.log(elemento)
}
console.clear();

for(let indice in dados){
    console.log(indice, dados[indice])
}
console.clear();


// PARTE 2 - METODOS DE ARRAYS

let arr1 = [30, 12, 45, 34, 29];
let arr2 = [];

// FATIAMENTO: SLICE

console.log(arr1.slice(0, 2)); //0, 1
console.log(arr1.slice(2)); // 3, 4, 5
console.clear()

// ADICIONANDO ELEMENTOS: PUSH | UNSHIFT

console.log('Antes de adicionar: ', arr2);
arr2.push(10, 20, 30, 40);
console.log('Depois de adicionar: ', arr2);

console.log('Antes de adicionar com unshift: ', arr2);
// arr2.unshift();
console.log('Depois de adicionar com unshift: ', arr2);

console.clear()
// REMOVENDO ELEMENTOS: POP | SHIFT

console.log('Antes de remover com pop: ', arr2);

const removido = arr2.pop()

// arr2.pop()

console.log('Depois de remover com pop: ', arr2);
console.log('Elemento removido com pop foi: ', removido);

console.log('Antes de remover com shift', arr2)
// arr2.shift()
console.log('Depois de remover com shift', arr2)

console.clear()

// CONCATENANDO ARRAYS: CONCAT

console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))

console.clear()

// BUSCANDO ELEMENTOS: indexOf lastIndexOF

console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34)
console.log(indiceDoElemento34)

let arr3 = [1, 2, 3, 3, 5, 3]
console.log(arr3.lastIndexOf(3))

console.clear()

// DESCOBRINDO A EXISTENCIA DE UM ELEMENTO: INCLUDES

console.log(arr1)
console.log(arr1.includes(10))

console.clear()

//INVERTENDO ARRAYS: REVERSE

console.log('arr1 normal: ', arr1)
const arr1Invertido = arr1.reverse()

console.log('arr1 invertido: ', arr1Invertido)
// console.clear()