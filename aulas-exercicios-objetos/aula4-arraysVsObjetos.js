// aula3-arraysVsObjetos.js

const afazeres = {
    dia1: "fazer bolo de banana",
    dia2: "fazer tema",
    dia3: "estudar",
}

const novosAfazeres = afazeres


afazeres.dia1 = "fazer bolo de chocolate";
afazeres.dia2 = "fazer reunião";

console.log(novosAfazeres)

console.log(afazeres)

// let novasNotas = notas [array]
// let novosAfazeres = afazeres [objetos]

// const pode ser comparado, pode ser reatribuido, mas não pode operar atribuicoes

// o array também pode fazer coisas semelhantes
 
const notas = [1,2,3]

const notas2 = notas

notas[1] = 67 

console.log(notas)

console.log(notas2)

// RESUMO: pode fazer algo tipo NOTAS2 = NOTAS1 tanto no array quanto no objetos, elas vão receber os mesmos valores

//