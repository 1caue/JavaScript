var readline = require('readline-sync');
var nome = readline.question("Qual seu nome?: ");
var n1 = readline.questionInt(`Insira o primeiro valor: `);
var n2 = readline.questionInt(`Insira o segundo valor: `);
var s = n1 + n2

console.log('------------------------');
console.log(`${nome} a Soma dos dois valores é:`);
console.log(`${n1} + ${n1} = ${s}`);
