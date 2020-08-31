function multiplos() {
    let valores = document.getElementById("txtNumeros").value;

    valores =  valores.split(",");

    let soma = 0;

    for(let i = 0; i < valores.length; i++) {
        if((parseInt(valores[i]) % 2 !== 0) && (parseInt(valores[i]) % 3 === 0 )) {
            soma = soma + parseInt(valores[i]);
        }
    }

    alert(soma);

}