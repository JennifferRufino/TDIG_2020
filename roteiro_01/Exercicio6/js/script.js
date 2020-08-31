function ordenarValores() {
    var valores = document.getElementById("txtNumeros").value;

    valores =  valores.split(",");

    alert(valores.sort(compararValores));

}

function compararValores(a, b) {
    return a - b;
}