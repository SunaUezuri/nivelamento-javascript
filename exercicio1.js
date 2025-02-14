let nome = "Wesley"
let idade = 19
let aprovado = true
let notas = [9.1, 9.5, 7.3]
let usuario = {email: "wesley.jane.santos@gmail.com", senha: "@S123456"}

console.log(`Olá, meu nome é ${nome}, tenho ${idade}, 
    ${aprovado? "Sou aprovado" : "Não sou aprovado"}.
    Minhas notas são: ${notas.join(", ")}
    Meu email é: ${usuario.email} e minha senha é: ${usuario.senha}`)