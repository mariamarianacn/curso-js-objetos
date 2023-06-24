// aula11-includes.js

const cliente = {
    nome: "joão",
    idade: 54,
    email: "joao.querido@gmail.com",
    telefone: ["7654321", "7584392"]
};

cliente.endereco = [
    {   
    rua: "R. José Teixeira",
    numero: 53,
    apartamento: false,
    }  
];

function ligarParaJoao(telefoneComercial, telefoneResidencial){
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`)
} 

ligarParaJoao(cliente.telefone[0], cliente.telefone[1])

ligarParaJoao(...cliente.telefone)

// lembrando, o spread é um classico dos arrays, nao object
 
/////////////////////////////////////////////
const encomendaParaJoaoClassica = {
    destinatario: cliente.nome,
    enderecoDoCliente: cliente.endereco[0]
}

/*destinatario: 'joão',
  enderecoDoCliente: { rua: 'R. José Teixeira', numero: 53, apartamento: false }*/

console.log(encomendaParaJoaoClassica)

//////////////////////////////////////////////
const encomendaParaJoaoDemorada = {
    destinatario: cliente.nome,
    ruaDoCliente: cliente.endereco[0].rua,
    numeroDoCliente: cliente.endereco[0].numero,
    apDoCliente: cliente.endereco[0].apartamento
} 
/* destinatario: 'joão',
  ruaDoCliente: 'R. José Teixeira',
  numeroDoCliente: 53,
  apDoCliente: false
}*/

console.log(encomendaParaJoaoDemorada)

/////////////////////////////////////////

const encomendaParaJoaoRapida = {
    destinatario: cliente.nome,
    ...cliente.endereco[0] // é um array ainda, viu
}
/* destinatario: 'joão',
  ruaDoCliente: 'R. José Teixeira',
  numeroDoCliente: 53,
  apDoCliente: false
}*/