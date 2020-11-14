const readline = require('readline');

let entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

entrada.question('Digite a data de entrega:', (E) => {
    let nums= E.split(" ")
    verifica(parseInt(nums[0]), parseInt(nums[1]));
    entrada.close();
});

function verifica(E, D){
    if(D - E >= 3) {
        console.log("Muito bem! O aluno está apto a apresentar até o natal!");
    }
    else {
        console.log("O trabalho está muito ruim");
        if((parseInt(D)+ 2) <= 24) {
            console.log("TCC Apresentado!");
        }
        else {
            console.log("Não deu! Só no próximo ano agora!");
        }
    }
}