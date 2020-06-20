var contador = document.getElementById('contar');
contador.addEventListener('click', contar);

function contar(){
   var inicio = document.querySelector('input#inicio');
   var fim = document.querySelector('input#fim');
   var passo = document.querySelector('input#passo');
   var res = document.querySelector('div#res');


   if( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       alert('impossivel contar');
       alert('[ERRO] faltam dados');
   }else{
     res.innerHTML = 'Contando : <br>'

     let ini = Number(inicio.value);
     let fm = Number(fim.value);
     let pass = Number(passo.value);
        
     if(pass <= 0){
         alert('Passo invalido considerando passo 1');
         pass = 1
     }
     // contagem crescente
     if(ini < fm){
        for( let c= ini ; c<= fm ; c+=pass){
            res.innerHTML += ` ${c} \u{270D}`
        }
       
        // contagem regressiva
     }else{
         for(let c = ini; c >= fm; c -= pass){
             res.innerHTML += ` ${c} \u{270D}`
         }
     }
     res.innerHTML += ` \u{1f3c1} `
    
   }
}