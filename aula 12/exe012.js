var hrCerta = new Date();


var hora = hrCerta.getHours();

console.log(` Agora são ${hora} horas`);

if(hora < 12){
    console.log('Bom dia flor do dia');
}else if( hora <= 18){
    console.log('Boa tarde');
}else{
    console.log('Boa noite')
}