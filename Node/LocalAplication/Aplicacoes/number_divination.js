var read = require('readline-sync');
var color = require('colors');
var random = Math.floor(Math.random() * 5); // sorteador de valores
var question = read.question('Advinhe um valor de 0 a 5: ');

if (question == random) {
    console.log('Parabéns voce acertou!');
    console.log(`O Computador inseriu ${random}`.green)
} else {

}

console.log(random)