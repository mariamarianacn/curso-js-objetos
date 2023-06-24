//aula10-LetIn.js

const cliente = {
    nome: "joão",
    idade: 54,
    email: "joao.querido@gmail.com",
    telefone: "7654321"
};

cliente.endereco = [
    {   
    rua: "R. José Teixeira",
    numero: 53,
    apartamento: false,
    }  
];

// para cada chave em cliente (array)
for (let chave in cliente){
    console.log(chave); // apresente suas chaves
};

// let .. in .. = mostrar chaves



//para cada chave em cliente (array)
for (let valor in cliente){
    console.log(`a chave ${valor} tem o valor: ${cliente[valor]}`) // apresente o valor inserido | valor inserido é analisado pelo abre [ e fecha ]
};



for (let chave2 in cliente){
    let tipo = typeof cliente[chave2];
    if (tipo !== "object" && tipo !== "function"){
    console.log(`a chave ${chave2} tem o valor: ${cliente[chave2]}`)}
};
// vai excluir o object object
