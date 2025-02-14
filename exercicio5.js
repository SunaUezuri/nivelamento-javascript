function converterParaMaiusculas(texto) {

    //Criando uma variável para um exemplo depois
    let mensagem = "Convertendo para maiúscula: ";
    console.log(mensagem)

    return texto.toUpperCase();
}

console.log(converterParaMaiusculas("Olá Mundo"));

const converterParaMaiusculasArrow = (texto) => texto.toUpperCase();

console.log(converterParaMaiusculasArrow("Bah Noite!"));

//Chamando a variável dentro da função
console.log(mensagem)

/*
    Erro: mensagem is not defined

    Esse erro se deve ao fato da variável "mensagem"
    ter sido declarada apenas na função, e em JavaScript
    variáveis dentro de funções tem ***escopo local***
    O que significa que a variável existe apenas dentro da função

*/