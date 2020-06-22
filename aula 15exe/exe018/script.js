var inicio = document.getElementById('gerar');
inicio.addEventListener('click', tabuada);

function tabuada(){
    var num = document.getElementById('n1');
    var tab = document.getElementById('tabu');
    if(num.value.length == 0){
        alert('Por favor, digite um numero!');
    }else{
        var n = Number(num.value);
        tab.innerHTML = ''
        for(var c= 1; c <=10 ; c++){
            var item = document.createElement('option');
            item.text = `${n} x ${c} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    }
    
}