let inicio = document.getElementById('btn');
inicio.addEventListener('click', adicionar);

let contar = document.getElementById('fim');
contar.addEventListener('click', finalizar);

let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');

let valores = []

//função para adicionar o valor a lista e testar se o valor é valido ou se ja esta presente na lista 
function adicionar(){

    if (isNum(num.value) && !isList(num.value, valores)){

        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `valor ${num.value} adicionado a lista`

        lista.appendChild(item);

        res.innerHTML = ''

    }else{
        alert('Valor invalido ou já esta na lista meu parcero!');

    }
    num.value = ''
    num.focus();
}

function isNum(n){
    if (Number(n) >= 1 && Number(n) <= 100){

        return true
    }else{
        return false
    }
}

function isList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

// finalizar e informar quantos numeros foram digitados e qual foi o menor e maior valor
function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!');
    }else{
        let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores [pos]
        }

        media = soma / tot

        res.innerHTML= ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p>e o menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p>somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p>e a media da soma é ${media} </p>`
        


    }
}