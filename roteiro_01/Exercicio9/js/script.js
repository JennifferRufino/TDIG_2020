function media() {
    let numeros = document.getElementById("txtNumeros").value;

    numeros =  numeros.split(",");

    let positivos = 0;
    let negativos = 0;

    for(let i = 0; i < numeros.length; i++) {
        if(parseInt(numeros[i]) > 0) {
            positivos = positivos + 1;
        } else if(parseInt(numeros[i]) < 0) {
            negativos = negativos + 1;
        }
    }

    let valor = calcularMediaAritmetica(numeros);
    let percentual = percentualPositivosNegativos(numeros.length, positivos, negativos);

    alert(`${valor} \n ${positivos} \n ${negativos} \n ${percentual[1]} \n ${percentual[0]}` );

}

function calcularMediaAritmetica(num) {
    let media = 0;
    let total = 0;

    for(let i = 0; i < num.length; i++) {
        media = media + parseInt(num[i]);
    }

    total = parseFloat(media/num.length);
    return total;
}

function percentualPositivosNegativos(length, positivo, negativo) {
    let one = negativo * 100 / length;
    let two = positivo * 100 / length;
    return [one, two]; 
}