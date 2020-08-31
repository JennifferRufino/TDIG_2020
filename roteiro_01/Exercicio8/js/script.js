function calcularFatorial() {
    let numeros = document.getElementById("txtNumeros").value;

    numeros =  numeros.split(",");

    let fatoriais = 0;

    for(let i = 0; i < numeros.length; i++) {
        fatoriais = fatorial(parseInt(numeros[i]));
        alert(`O fatorial de ${numeros[i]} é: ${fatoriais}`);
    }
}

function fatorial (n){
    if(parseInt(n) == 0) {
        return 1;
    }else {
        return parseInt(n) * fatorial(parseInt(n) - 1);
    }
} 