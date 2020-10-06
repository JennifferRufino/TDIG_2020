let aux = 0;

function five(inicio, fim) {
    if(inicio > fim && fim < inicio) {
        aux = inicio;
        inicio = fim;
        fim = aux;
    }
    for(let i = inicio; i <= fim; i++) {
        if(ehPrimo(i)) {
            console.log(i);
        }
    }
}

function ehPrimo(num) {
    if(num == 1){
        return false;
   }
   for(let j = 2; j <= num / 2; j++){
     if(num % j == 0){
          return false;
     }
   }
   return true;
}

console.log(five(100, 0));