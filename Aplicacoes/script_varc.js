let num = [5, 1, 2, 4, 3]
/*console.log(`O nosso vetor é o ${num.sort()}`)
console.log(`O primeiro valor do vetor é o ${num[0]}`)
console.log(`O nosso maior valor é o ${num.length}`)
console.log(num)*/
for(let pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos+1} tem o valor ${num[pos]}`)
}

console.log('')
console.log('No exemplo 2')
for(let pos in num) {
    console.log(`A posição ${pos+1} tem o valor ${num[pos]}`)
}

console.log(num.indexOf(3))