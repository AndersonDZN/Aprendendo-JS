let valores = [ 2, 3, 5, 6];

valores.sort();

// for( let pos = 0; pos < valores.length ; pos++){
//     console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`);
// }


for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}