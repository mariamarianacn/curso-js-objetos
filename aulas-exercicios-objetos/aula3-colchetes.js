const informacoesMari = {
    nome: "maria",
    corFavorita: "preto",
    florFavorita: "margarida",
    idade: 34,
};

console.log(`meu nome é ${informacoesMari["nome"]} e tenho ${informacoesMari["idade"]}. Minha cor favorita é ${informacoesMari["corFavorita"]} e a flor é ${informacoesMari["florFavorita"]}`);

const chaves = ["nome", "corFavorita", "florFavorita", "idade"];

chaves.forEach((chave) =>{
    console.log(`A chave ${chave} tem valor ${informacoesMari[chave]}!! `)
})

