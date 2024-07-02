console.clear()
let re = require('readline-sync');
let color = require('colors');
console.log('-------- CONVERSOR --------'.bgGreen);
let v = re.questionInt('Digite o valor que deseja converter em reais: ');
var d = v / 5.68
console.log(`R$${v} = U$${d}`)
