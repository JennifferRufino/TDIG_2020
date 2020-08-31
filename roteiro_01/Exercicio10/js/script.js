function inverterNumeros() {
    let numeros = document.getElementById("txtNumeros").value;

    numeros =  numeros.split(",");

    const resultado = reverse(numeros);
    alert(resultado);
}

function reverse(num) {
    return num.reverse().join(" ").trim();
}