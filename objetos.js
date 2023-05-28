// OBJETOS

// Como criar objetos

let pessoa = {
    nome: 'Diego',
    idade: 24,
}

console.log(pessoa)
console.log(pessoa['nome'])
console.log(pessoa.idade)
// console.clear()

//Como adicionar
pessoa.altura = 1.80
console.log(pessoa)

//remover
delete pessoa.altura
console.log(pessoa)

console.clear()
//percorrer

for (let chave in pessoa){
    console.log(chave)

}