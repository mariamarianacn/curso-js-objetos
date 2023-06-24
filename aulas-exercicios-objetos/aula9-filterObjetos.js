// aula9-filterObjetos.js

const cliente = [{
    nome : "joana",
    idade: 45,
    telefone: ["6543765", "87654678"]
}]

cliente.empresas = [{
    empresaBrasil: "Joana's company",
    empresaMexico: "Joana's",
    empresaJapao: "Joana's"

}]

cliente.empresas.push(
    {
        empresaChina: "Joana's"
    }
)



const mostrarEmpresas = cliente.empresas.filter(
    (empresa) => {
        return empresa == "Joana's"
    }
)

console.log(mostrarEmpresas)

/*

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

cliente.enderecos.push({
  rua: "R. Joseph Ladder",
  numero: 404,
  apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);




*/