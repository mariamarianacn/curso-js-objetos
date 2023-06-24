/*{

FORMATO JSON: 

    "nome": "Joao",
    "email": "joao@firma.com",
    "telefone": ["11223344", "11922334453"],
    "endereco": {
      "rua": "R. Joseph Climber",
      "numero": 202,
      "apartamento": true,
      "complemento": "ap 934"
    }
  }*/

/*1. JASON NN ACEITA:
- FUNCTION, NOMES DE FUNCTION
- OBSERVAÇÕES
- SÓ RECEBE DATA TYPES SIMPLES, COMO BOOLEANOS, NUMBER, STRING

E TMB, É ÚTIL PARA BRINCAR COM OS OBJETOS fora do nosso ambiente

*/

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