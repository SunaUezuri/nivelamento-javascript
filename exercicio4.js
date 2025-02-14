let opcao = null;

do {
    opcao = prompt("Escolha uma opção: \nA - Opção A \nB - Opção B \nC - Opção C \nS - Sair").toUpperCase();

    switch (opcao) {
        case "A":
            console.log("Opção A escolhida");
            break;
        case "B":
            console.log("Opção B escolhida");
            break;
        case "C":
            console.log("Opção C escolhida");
            break;
        case "S":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida, tente novamente.");
            break;
    }

} while (opcao !== "S");