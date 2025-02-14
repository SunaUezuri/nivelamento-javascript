let valorNulo = null;
let valorIndefinido;

if (valorNulo === null) {
    console.log("O valor é nulo");
} else if(valorNulo !== undefined) {
    console.log("O valor é indefinido");
} else {
    console.log("O valor não é nenhum dos do exercício")
}

if (valorIndefinido === undefined) {
    console.log("O valor é indefinido");
} else if (valorIndefinido !== undefined) {
    console.log("O valor é nulo");
} else {
    console.log("O valor não é nenhum dos do exercício")
}