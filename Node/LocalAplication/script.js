var readline = require('readline-sync');
var nome = readline.question("Qual seu nome?: ");
var Idade = readline.questionInt("Qual a sua idade?: ");
var pai = readline.question("Qual o nome do seu pai?: ");
var mae = readline.question("Qual o nome da sua mae?: ");

console.log('------------------------');
console.log(`O nome inserido pelo usuário foi ${nome}`);
console.log(`A Idade inserida pelo usuário foi ${Idade}`);
console.log(`O nome do pai do usuário é ${pai}`);
console.log(`O nome da mãe do usuário é ${mae}`);