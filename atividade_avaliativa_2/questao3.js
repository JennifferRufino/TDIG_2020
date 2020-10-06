const notas= [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

const conceitos = notas.forEach(function(nota){
    if(nota >= 0.0 && nota <= 4.9) console.log('D')
    else if(nota >= 5.0 && nota <= 6.9) console.log('C')
    else if(nota >= 7.0 && nota <= 8.9) console.log('B')
    else if(nota >= 9.0 && nota <= 10) console.log('A')
})