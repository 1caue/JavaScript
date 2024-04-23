function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora} Horas</strong>`
    if (hora >= 0 && hora <= 12) {
        // bom dia 
        img.src = 'manha.png'
        document.body.style.background = '#c9cdd8'
    } else if (hora > 12 && hora <= 18) {
        // boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#aed2ec'
    } else {
        // boa noite
        img.src = 'noite.png'
        document.body.style.background = '#181510'
    }
}