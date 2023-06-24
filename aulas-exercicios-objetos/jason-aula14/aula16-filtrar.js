// aula16-filtrar.js

const clientesJson = require("./aula16-filtrar.json")

function filtrarApartamentos (clientes){
    return clientes.filter((cliente) =>{
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
    } )
}

const filtrados = filtrarApartamentos(clientesJson)

console.log(filtrados)