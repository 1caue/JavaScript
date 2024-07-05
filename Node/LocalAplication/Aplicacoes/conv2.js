console.clear();
let read = require('readline-sync');
let cor = require('colors');

let guess = 'S';

while ( guess === 'S' || guess === 's') {
    
    console.log('-------- CONVERSOR --------'.bgGreen);
    let v = read.questionInt('Digite o valor que deseja converter em reais: ');
    let d = v / 5.47
    console.log(`R$${v} = U$${d.toFixed(2)}`.bgBlue)
    
    guess = read.question('Deseja continuar? [S/N]: ');
    
    if (guess === 'N' || guess === 'n') {
        break;   
    
    } else if ( guess !== 'S' && guess !== 's' ) 
    
    { console.log('Por favor digite Apenas "S" para sim e "N" para nao e tente novamente'.bgRed);
    
    }
}
    
