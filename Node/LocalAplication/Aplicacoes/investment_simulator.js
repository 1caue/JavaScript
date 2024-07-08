console.clear()
var read = require('readline-sync');
var color = require('colors');
var bb = 0
var bdc = 0
var itu = 0
var value = 0

console.log('--------INVESTIMENTOS BANCÁRIOS--------'.green)
console.log('[1] BBAS3 (Banco do Brasil) R$26,29 BRL\n[2] BBDC4 (Bradesco) R$12,46 BRL\n[3] ITUB4 (Itaú Unibanco) R$28,36 BRL')

while (true) {
    var quest = read.questionInt('Em qual acao deseja investir?, Informe o Digito da acao: ')
    if (quest === 1) {
        console.log('OK você investiu no Banco do brasil!\n')
        bb += 1
        value += 26.29

    } else if (quest === 2) {
        console.log('OK você investiu no Bradesco!\n')
        bdc += 1
        value += 12.46

    } else if (quest === 3) {
        console.log('OK você investiu no Itaú!\n')
        itu += 1
        value += 28.36

    } else if (quest > 3 || quest < 1) {
        console.log('ERRO!, Digite apenas os digitos listados acima'.red)
    }

    var response = read.question('Deseja continuar? [S/N]: '.yellow)
    if (response === 'n' || response === 'n') {
        break
    } else if ( response !== 'S' && response !== 's' ) { 
        console.log('Por favor digite Apenas "S" para sim e "N" para não e tente novamente'.red);
    }
}

console.log(`Você tem tem:\n${bb} ações do Banco do Brasil\n${bdc} ações do Bradesco\n${itu} ações do Itau`)
console.log(`Você investiu R$${value.toFixed(2)}`)