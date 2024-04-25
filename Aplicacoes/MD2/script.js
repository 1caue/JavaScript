function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crian-masc2.png') 
                genero = 'uma Criança'
            } else if (idade < 21)  {
                // Adolescente
                img.setAttribute('src', 'ad-masc2.png')
                genero = 'um Adolescente'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adult-masc2.png')
                genero = 'um Adulto'
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-masc2.png')
                genero = 'um Idoso'
            }
        } else if (fsex[1].checked) {   
            genero = 'uma Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança 
                img.setAttribute('src', 'crian-fem2.png')
                genero = 'uma Criança'
            } else if (idade < 21)  {
                // Adolescente
                img.setAttribute('src', 'ad-fem2.png')
                genero = 'uma Adolescente'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adult-fem2.png')
                genero = 'um Adulto'
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-fem2.png')
                genero = 'uma Idosa'
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}