//

const cliente = {
    nome: "joão",
    idade: 54,
    email: "joao.querido@gmail.com",
    telefones : {
        telefoneEmpresa: "6499900",
        telefonePessoal: "9490034",
    }
}    

cliente.endereco = [
    {
    enderecoEmpresa: {
        rua: "R. José Teixeira",
        numero: 53,
        apartamento: false,
    },
    enderecoPessoal: {
        rua: "R. Arnaldo Peixe",
        numero: 54,
        apartamento: true,
    }
    }
]

cliente.endereco.push({
    enderecoNovo: {   
        rua: "R. CasaGrande",
        numero: 54,
        apartamento: false,
    }
})

const listaComApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaComApartamentos)