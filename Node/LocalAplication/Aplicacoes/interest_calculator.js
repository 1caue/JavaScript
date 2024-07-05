console.clear();
let read = require('readline-sync');
let color = require('colors');

let r = 1
let quest = read.questionInt('Em quantos Meses deseja calcular?: '.yellow);
let percent = read.questionInt('Em quantos % MENSAL deseja calcular?: '.yellow)
let value = read.questionInt('Qual o valor a ser calculado?: '.yellow)

while ( r <= (quest+1) ) {
    let count = value * (percent / 100);
    console.log(`Mes ${r} = ${value.toFixed(2)}`);
    r++
    value += count
}

console.log('---------------------------------------'.green);
console.log(`o valor acomulado em ${quest} meses é ${value.toFixed(2)}`);