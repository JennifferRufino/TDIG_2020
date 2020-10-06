var array = [1, 60, 232, 7, 25, 76, 29,74, 92];

//valores filtrados
var lista = array.filter(n => n > 60 && n < 300);

var somatorio = 0;
somar = (item) => somatorio += item;

//soma dos elementos
soma = lista.forEach(somar)

console.log(`A lista dos valores maiores que 60 é ${lista}` + '.' + `A soma dos elementos da lista é ${somatorio}` + '.');


