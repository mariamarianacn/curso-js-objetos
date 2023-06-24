// IMPORTANTE-arrayObjetos.js

const notas = [1,2,3,4,]

const notas2 = notas

console.log(notas)// 1,2,3,4

console.log(notas2) //1,2,3,4



const objPersonagem ={
    nome: "ana",
    nivel:"10",
}

const objPersonagem2 = objPersonagem

objPersonagem2.nome = "ana mélia"

console.log(objPersonagem) // { nome: 'ana mélia', nivel: '10' }

console.log(objPersonagem2) // { nome: 'ana mélia', nivel: '10' }


/*VÃO VIRAR A MESMA COISA, RETORNAM A MESMA COISA*/




//////////////////////////////////////////////////////////////////Q///// QUERO DIFERENCIAR 
const media = [9,8,7,6]

const media2 = [...media]
media2.push(5)

console.log(media)// 9,8,7,6

console.log(media2) //9,8,7,6,5


const cachorros = {
    nome : "maria",
    brinquedo: "bola"
}

const cachorros2 = Object.create(cachorros)

cachorros2.nome = "maria flor"

console.log(cachorros.nome) // { nome: 'ana mélia', nivel: '10' }

console.log(cachorros2.nome) // { nome: 'ana mélia', nivel: '10' }

// Object.create() = [... const]
