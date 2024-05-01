function button() {
    var inicio = document.getElementById('ini')
    var passo = document.getElementById('pas')
    var fim = document.getElementById('fim')
    var res = document.getElementById('res')
    
    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[Erro] Faltam dados')
    } else {
        res.innerHTML = `<strong>Contando: </strong>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        for(var c = i; c <= f; c += p) {
            res.innerHTML += `<strong>${c}</strong>&#128073; `
        }
    }
}