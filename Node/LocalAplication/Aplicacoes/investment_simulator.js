console.clear()
var read = require('readline-sync');
var color = require('colors');

console.log('--------INVESTIMENTOS BANCÁRIOS--------'.green)
console.log('[1] BBAS3 (Banco do Brasil)\n[2] BBDC4 (Bradesco)\n[3] ITUB4 (Itaú Unibanco)')

while (true) {
    var quest = read.questionInt('Em qual acao deseja investir?, Informe o Digito da acao: ')
    if (quest === 1) {
        console.log('OK você investiu no Banco do brasil!')
    } else if (quest === 2) {
        console.log('OK você investiu no Bradesco!')
    } else if (quest === 3) {
        console.log('OK você investiu no Itaú!')
    } else if (quest > 3 || quest < 1) {
        console.log('ERRO!, Digite apenas os digitos listados acima'.red)
    }

    var response = read.question('Deseja continuar? [S/N]: ')
    if (response === 'n' || response === 'n') {
        break
    } else if ( response !== 'S' && response !== 's' ) { 
        console.log('Por favor digite Apenas "S" para sim e "N" para nao e tente novamente'.red);
    }
}