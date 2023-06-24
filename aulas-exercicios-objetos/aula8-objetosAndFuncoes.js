// 

const cliente = {
    nome: "joão",
    idade: 54,
    email: "joao.querido@gmail.com",
    saldoAtual: 500,
    pagarBoleto: function (valor){

        let valorResto = (valor - this.saldoAtual) // THIS AGE COMO UM RETORNO DA CHAVE DECLARADA NO OBJETO!!!

        if (valor > this.saldoAtual){ // THIS É OBRIGATÓRIO
            console.log(`saldo insuficiente! para realizar esse pagamento você precisa de mais $${valorResto} reais`);
        } else{
            console(`pagamento aprovado. saldo restante: ${valorResto}`)
        }
    }
}    

cliente.pagarBoleto(550)

// não aceita arrow function