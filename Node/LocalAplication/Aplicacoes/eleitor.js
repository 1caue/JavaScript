var readline = require('readline-sync');
var name = readline.question('Qual o seu nome?: ');
var idade = readline.questionInt('Quantos anos voce tem?: ');

console.log('---------------------------------------')
if (idade < 16) {
    console.log(`${name} você tem ${idade} anos, você ainda NÃO pode votar`)
} else if (idade == 16 || idade > 65) {
    console.warn(`${name} você tem ${idade} anos, você PODE votar porém NÃO é OBRIGADO`)
} else {
    console.log(`${name} você tem ${idade} anos, você é OBRIGADO a votar`)
}