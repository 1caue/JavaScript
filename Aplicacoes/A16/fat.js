// 5! = 5 x 4 x 3 x 2 x 1
function fat(n) {
    let f = 1 
    for(let c = n; c > 1; c--) {
        f *= c
    }
    return f
}
console.log('Exemplo 1')
console.log(fat(5))
console.log(' ')

function fat2(n){
    if (n == 1)  {
        return 1
    } else {
        return n * fat2(n-1)
    }
}
console.log('Exemplo 2')
console.log(fat2(5))
