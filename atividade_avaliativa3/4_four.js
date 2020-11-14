const palavras= ['one', 'two', 'three', 'four'];

function achouNumero (value) {
    for (let i = 0; i < value.length; i++) {
        if (typeof value[i] === "number") {
            throw new Error(`Tem um numero na posição ${i}`)
        }
    }
}

function colocarTodasPalavrasEmMaiusculo(palavras){ 
    return new Promise ( (resolve, reject) => {
            achouNumero(palavras)
            resolve(palavras.map(e => {
                if (typeof e === "string") {
                    return e.toUpperCase()
                }
            }))
    })
}

colocarTodasPalavrasEmMaiusculo(palavras)
.then(console.log)
.catch(erro => console.log(erro))


const ordenarPalavras = (palavras) => {
    return new Promise(
        (resolve, reject) => {
            palavras.forEach( p => {
                if( typeof p !== 'string') {
                    reject(p + ' não é string');
                }
            })
            resolve(palavras.sort());
        }
    );
}

ordenarPalavras(palavras)
.then(console.log)
.catch(erro => console.log(erro))