let valor = 20

function incremento() {
    console.log("Estou na função")
    valor = 20 + 30
}

function mostraNome(nomeDaPessoa) {
    console.log(nomeDaPessoa)
}

function soma(n1=0, n2=0){
    
    const somaDosNumeros = n1 + n2

    return somaDosNumeros
}

const meusNumeros = soma(3, 6)

// Arrow Function
const multi = (n1, n2) => {
    const multiplicacao = n1 * n2

    return multiplicacao
}

const multiplicacao = multi(2, 5)

console.log(`Valor da soma: ${meusNumeros}`)
console.log(`Valor da multiplicação: ${multiplicacao}`)

mostraNome("Cauê")
incremento()
console.log(valor)
