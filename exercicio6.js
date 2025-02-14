//Função que aceita um callback
function processarDados(callback) {
    console.log("Processando os dados...");
    
    //Chamando o callback
    setTimeout(() => {
        callback();
    }, 1000);
}

//Callback de exemplo
function concluirProcesso(){
    console.log("Processo concluído!");
}

//Chamando a função processarDados passando a função concluirProcesso como callback
processarDados(concluirProcesso);

//Função assincrona que simula a busca de um usuário
function buscarUsuario() {
    return new Promise((resolve) => 
    setTimeout(() => {
        resolve({ id: 1, nome: "Fulaninho" });
    }, 1000));
}

//Chamando a função e usando .then() para exibir
buscarUsuario().then((usuario) => {
    console.log(`Usuário encontrado: ${usuario.nome}`);
})