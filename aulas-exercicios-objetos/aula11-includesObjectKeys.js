// aula11-includes.js

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

// OBS: endereco é uma chave de cliente, e dentro dele há outras chaves

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto); // [ 'nome', 'idade', 'email', 'telefone', 'endereco' ]   ||  vai mostrar as chaves do objeto, né!!

if (!chavesDoObjeto.includes("endereco")){
    console.log(`ERRO. cadastre um`)
} else {
    console.log(cliente.endereco)
} // { rua: 'R. José Teixeira', numero: 53, apartamento: false } -> vai mostrar o que há em endereco