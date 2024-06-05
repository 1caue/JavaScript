let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4, 
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Digite algo: ', (answer) => {
    console.log(`Você digitou: ${answer}`);
    r1.close()
})