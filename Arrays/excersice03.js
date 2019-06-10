
/*
Paco no estudió mucho para sus últimos exámenes, quiere saber 
cuántos exámenes tendrá que realizar de nuevo, el 
programa recibirá un arreglo de calificaciones para poder calcular el resultado

*/

const calificaciones = [6,7,5,7,5]
let examenesARealizar = 0

let i = 0

for (i; i < calificaciones.length; i++){
    let calificacion = calificaciones[i]
    if (calificacion < 6 ){
        examenesARealizar = examenesARealizar + 1
    }
}console.log(" Paco tiene que realizar " + examenesARealizar + " materias")