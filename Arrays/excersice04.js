/*Joel tiene que informar a sus alumnos quienes tienen que repetir curso, 
el tiene una lista de alumnos, cada alumno tiene un nombre y una lista de 
calificaciones que se tienen que promediar para saber si el alumno está aprobado, 
el promedio mínimo para aprobar es 6. Haz un algoritmo que escriba el nombre de los 
alumnos que no aprobaron.
*/

let alumnos = [{
     nombre: 'Juan',
     calificaciones:[5,10,6,6 ]
},{
    nombre: 'Mary',
    calificaciones: [10,8,5,7]
},{
    nombre: 'Yesi',
    calificaciones: [5,5,5,7]
}
]

//let promedioFinal = 6
let alumno;

for(let j=0; j < alumnos.length; j++){

let promedio=0

for (let i=0; i < alumnos[j].calificaciones.length; i=i+1){
    //primero obtener al alumno
    promedio = promedio + alumnos[j].calificaciones[i]
}
promedio = promedio/alumnos[j].calificaciones.length
//console.log (promedio)
if (promedio > 6){
    console.log (alumnos[j].nombre+' pasó con promedio de: ' + promedio)
}else {
    console.log (alumnos[j].nombre+' reprobó con promedio de: ' + promedio)
}
}
