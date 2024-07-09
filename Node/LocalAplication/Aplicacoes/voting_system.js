var read = require('readline-sync');
var color = require('colors');
console.clear();

var cand1 = 0
var cand2 = 0
var cand3 = 0 
var repeat = read.question('Deseja ');

while (true) {
    console.log('CANDIDATO 1 [1]\nCANDIDATO 2 [2]\nCANDIDATO 3 [3]'.white)
    console.log('Para votar coloque o digito da direita do nome do candidato abaixo'.gray)
    var quest = read.question('Digite aqui (Apenas Numeros): ');
    
    if (quest == 1) {
        cand1 += 1
        console.log('Ok!, Você votou no candidato de número 1'.green);
        break

    } else if (quest == 2) {
        cand2 += 1
        console.log('Ok!, Você votou no candidato de número 2'.green);
        break

    } else if (quest == 3) {
        cand3 += 1
        console.log('Ok!, Você votou no candidato de número 3'.green);
        break
    
    } else {
        console.log('Por favor, Informe apenas os valores listados acima!'.red);
        return
    }
}
