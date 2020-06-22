let valores = [ 2, 3, 5, 6, 7,8 ,89,23,21,45,78,434,333,12];
valores.sort();
// for( let pos = 0; pos < valores.length ; pos++){
//     console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`);
// }


for(let pos in valores){
    console.log(`A posição pos ${pos} tem o valor ${valores[pos]}`);
}