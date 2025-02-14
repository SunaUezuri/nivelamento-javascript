let nome = "Wesley"
let idade = 19
let aprovado = true
let notas = [9.1, 9.5, 7.3]
let usuario = {email: "wesley.jane.santos@gmail.com", senha: "@S123456"}

console.log(`Olá, meu nome é ${nome}, tenho ${idade}, 
    ${aprovado? "Sou aprovado" : "Não sou aprovado"}.
    Minhas notas são: ${notas.join(", ")}
    Meu email é: ${usuario.email} e minha senha é: ${usuario.senha}`)

/*
    Agora declaremos uma outra variável e
    veremos como funciona o null e o undefined
*/

let gs;

 //Neste caso podemos ver um caso de undefined, pois a gs é uma variável que existe mas não tem um valor atribuída a ela
console.log(`Minha nota na GS é: ${gs}`)

let rm = null;   

//Quando se declara uma variável nula indica que aquele campo pode ser opcional por exemplo, ou seja ela tem um valor mas está vazia esperando para receber um dado
console.log(`Meu RM é: ${rm}`)

