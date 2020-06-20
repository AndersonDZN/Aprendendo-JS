var enviar = document.querySelector('btn');
btn.addEventListener('click', verificar);

function verificar(){
    var data = new Date();
    var ano = data.getFullYear();

    var fAno = document.querySelector('input#anos');

    var res = document.querySelector('div#res');

    if( fAno.value.length == 0 || fAno.value > ano ){
        alert('[ERRO] Verifique os dados e tente novamente');

    }else {
        var fSex = document.getElementsByName('rads');
        var idade = ano - fAno.value

        var gênero = ''

        var img = document.createElement('img');

        img.setAttribute('id', 'foto');

        if(fSex[0].checked){
            gênero = 'Homen'
            if(idade >=0 && idade < 15){
                //criança
                img.setAttribute('src', 'criancaM.png');

            }else if(idade < 26){
                //jovem
                img.setAttribute('src', 'homenJ.png');
            }else if(idade < 100){
                //idoso
                img.setAttribute('src', 'homenV.png');
            }else{
                //rip
                img.setAttribute('src', 'f.png');
            }
        }else if( fSex[1].checked){
            gênero = 'Mulher'

            if(idade >=0 && idade < 15){
                //criança
                img.setAttribute('src', 'criancaF.png');
            }else if(idade < 26){
                //jovem
                img.setAttribute('src', 'mulherJ.png');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulherA.png');
            }else if(idade < 100){
                //idoso
                img.setAttribute('src', 'mulherV.png');
            }else{
                //rip
                img.setAttribute('src', 'f.png');
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos que você é ${gênero} e tem ${idade} anos `
        res.innerHTML +=``
        res.appendChild(img);
    }
}