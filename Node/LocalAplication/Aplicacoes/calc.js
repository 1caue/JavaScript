const readline = require('readline-sync');
console.log("------CALCULADORA------".green);
console.log("[1] para Somar\n[2] para Subtrair\n[3] para Multiplicar\n[4] para Dividir");
var select = readline.question('Digite o que voce deseja fazer:');

if (select == 1){

    var n1 = readline.questionInt('Digite o primeiro valor> ');
    var n2 = readline.questionInt('Digite o segundo valor> ');
    var s = n1 + n2
    console.log('--------------------------------'.green);
    console.log(`${n1} + ${n2} = ${s}`);

} else if (select == 2){
    
    var n1 = readline.questionInt('Digite o primeiro valor> ');
    var n2 = readline.questionInt('Digite o segundo valor> ');
    var s = n1 - n2
    console.log('--------------------------------'.green);
    console.log(`${n1} - ${n2} = ${s}`);

} else if (select == 3){

    var n1 = readline.questionInt('Digite o primeiro valor> ');
    var n2 = readline.questionInt('Digite o segundo valor> ');
    var s = n1 * n2
    console.log('--------------------------------'.green);
    console.log(`${n1} X ${n2} = ${s}`);

} else if (select == 4){
    var n1 = readline.questionInt('Digite o primeiro valor> ');
    var n2 = readline.questionInt('Digite o segundo valor> ');
    var s = n1 / n2
    console.log("--------------------------------".green);
    console.log(`${n1} / ${n2} = ${s}`);
} else {
    console.log('Erro, Por favor digite um dos numeros listados acima e tente novamente.')
}


