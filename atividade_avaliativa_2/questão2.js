const object = {
    id: Number,
    nome: String,
    n: Number,
    a1: Number,
    e: Number
}

class Object {
    constructor(id, n, a1, e, nome) {
        this.id = id;
        this.n = n;
        this.a1 = a1;
        this.e = e;
        this.nome = nome;
    }
}


var total = 0;
function PA({n: termo, a1: primeiroTermo, e: razao}) {
    var saida = "";
    for(var count = 1; count <= termo; count++) {
        console.log(`Termo ${count} = ${primeiroTermo}`);
        primeiroTermo += razao;
        total += termo;
    }

    console.log(`Soma = ${total}`);
};
var paObj = new Object(1, 5, 1, 2, "PA");
console.log(paObj.nome);
PA(paObj);

var t = 0;
function PG({n: termo, a1: primeiroTermo, e: razao}) {
    var saidaPG = "";
    for(var c=1 ; c<= termo ; c++){
        var pg= primeiroTermo*(razao)**(c-1);
        console.log(`Termo ${c} = ${pg}`);
        t += pg;
    }
    console.log(`Soma = ${t}`);
}
var pgObj = new Object(1, 5, 1, 2, "PG");
console.log(pgObj.nome);
PG(pgObj);




