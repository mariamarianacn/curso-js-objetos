const personagens = {
    nome1: "mila",
    nome2: "andré",
    nome3: "andressa",
    nome4: "ana"
}

delete personagens.nome3 // ele vai deletar o que não é necessário
delete personagens["nome2"]

const deletar = delete personagens.nome4 // BOOLEANO! O DELETE

console.log(deletar) // true 
console.log(personagens) //só retorna o nome1