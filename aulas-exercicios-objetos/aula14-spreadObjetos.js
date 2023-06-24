// aula14-spreadObjetos.js

const personagem1 = {
    nome: "joao",
    idade: 23
}

const personagem2 = {
    nome: "angela",
    idade: 65
}

const personagem3 = {
    nome: "andré",
    idade: 53
}

const personagens = {...personagem1, ...personagem2, ...personagem3}

console.log(personagens)

// NÃO! PODEMOS USAR O SPREAD PARA OBJETOS COM CHAVES IGUAIS, SOBREPÕE ELAS