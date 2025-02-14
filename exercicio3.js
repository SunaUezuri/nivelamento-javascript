let valor = 0

if (valor > 0){
    console.log("O valor é positivo");
} else if (valor < 0) {
    console.log("O valor é negativo");
} else {
    console.log("O valor é zero");
}

for (let i = 0; i < 11; i++) {
    console.log(i);
}

//Criando variáveis para realizar o loop de soma

let numero = 1 //Começa em 1
let soma = 0; //Variável para inicializar a soma

while(numero <= 5) {
    soma += numero; //Soma o número ao acumulador
    numero++; //Incrementa o número
}

console.log("Soma dos números de 1 a 5:", soma);