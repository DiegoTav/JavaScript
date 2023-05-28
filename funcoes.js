//FUNCOES

//DEFINICAO
function saudacao() {
    console.log('Bem vindo ao curso!')
}

saudacao()

console.clear()

//Enviar parametros para as funcoes 

function saudacao(nome, curso = 'JS') {

    console.log(`${nome} Bem vindo ao curso de ${curso}!` )
}

saudacao('Diego')
console.clear()

// Retorno da funcao

function soma (n1, n2){
    return n1 + n2
}
const resultado =  soma(10,20)
console.log(resultado / 2)

console.clear()

function maior(n){
    if (n > 50){
        return true
    }
    return false
}

//arrow function. pesquisar
