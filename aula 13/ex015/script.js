
function carregar () {
    
    var msg = document.getElementById('msg');

    var img = document.getElementById('imagem');

    var data = new Date();

    var hora = data.getHours();

    msg.innerHTML = `Agora são ${ hora } horas`

    if (hora >= 0 && hora < 12){
        //  BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#C6A128'
        msg.innerHTML += ' Bom dia '
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#CE7510'
        msg.innerHTML += ' Boa tarde '
    }else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#001933'
        msg.innerHTML += ' Boa noite '
    }

}
