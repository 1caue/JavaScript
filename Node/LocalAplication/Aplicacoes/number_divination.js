var read = require('readline-sync');
var color = require('colors');
var cont = 0
var conterr = 0

while (true) {
    var question = read.questionInt('Advinhe um valor de 0 a 5: ');
    var random = Number(Math.floor(Math.random() * 5)); // sorteador de valores
    cont ++
    if (question == random) {
        console.clear();
        console.log('Parabéns voce acertou!');
        console.log(`O Computador inseriu ${random}`.green);
        console.log(`TOTAL DE TENTATIVAS: ${cont}`.gray);
        console.log(`TOTAL DE ERROS: ${conterr}`.red);
        break;
 
    } else {
        console.log('Não foi dessa vez, tente novamente!'.red);
        console.log(`O Computador inseriu ${random}`.green);
        conterr++
    }
}