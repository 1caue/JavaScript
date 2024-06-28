var readline = require('readline-sync');
var nome = readline.question('Qual o seu nome?: ');
var n1 = readline.questionInt('Qual foi a sua primeira nota?: ');
var n2 = readline.questionInt('Qual foi a sua segunda nota?: ');
var n3 = readline.questionInt('Qual foi a sua terceira nota?: ');
var mean = n1 + n2 + n3 / 4

console.log('--------------------------------------');
if(mean >= 15){
    console.log(`${nome} parabéns você foi aprovado!`);
} else {
    console.log(`${nome} infelizmente você não foi aprovado!`);
}
