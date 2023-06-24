// aula15-encontrar

const lerJson = require("../../../../jason-aula14/aula15-encontrar.json");

function encontrar(listaArray, chave, valor){
    return listaArray.find((encontrarValor) => encontrarValor[chave].includes(valor))
};

const mostrarEncontrados1 = encontrar(lerJson, "nome", "andressa"); // undefined, não tem andressa

console.log(mostrarEncontrados1)


const mostrarEncontrados2 = encontrar(lerJson, "nome", "paula");

console.log(mostrarEncontrados2)


const mostrarEncontrados3 = encontrar(lerJson, "telefone", "6758493")

console.log(mostrarEncontrados3)