/*Joel tiene que informar a sus alumnos las materias que reprobaron,
 el tiene una lista de alumnos, cada alumno tiene un nombre y una lista de materias, 
 cada materia tiene su nombre y su calificación, el promedio mínimo para aprobar es 6. 
Haz un algoritmo que escriba el nombre del alumno y la materia que reprobó*/


const lista_alumnos = [
    {
        nombre: 'yesi',
        lista_materias: [ {nombe: 'mate', cal: 5}, {nombe: 'historia', cal: 10}, {nombe: 'ingles', cal: 9}]   
    }]


let alumno = 0
//imprime las materias que reprobaron
//console.log(alumno)
let menor= lista_alumnos[0].lista_materias[0].cal;
let materiass = lista_alumnos[0].lista_materias.nombe
let i = 0
let j = 0
let materia = 0
for (i; i < lista_alumnos.length; i ++){
    for (j; j < lista_alumnos[i].lista_materias.length; j ++){
        materia = lista_alumnos[i].lista_materias[j].cal
        
       if (materia < 6){
        materiass = materia
        console.log (materiass + materia)
       }
    }
}


//console.log (materia)