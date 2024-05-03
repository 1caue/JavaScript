function button() {
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')
    
    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossivel Contar!'
        window.alert('[Erro] Faltam dados')
    } else {
        res.innerHTML = `<strong>Contando: <br></strong>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `<strong>${c}</strong> &#128073; `
            }            
        } else {
            // Contagem regressiva
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `<strong>${c}</strong> &#128073;` 
            }        
        }
        res.innerHTML += `&#127988;`
    }

}