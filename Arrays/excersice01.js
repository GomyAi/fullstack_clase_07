/*/*fadsf
A Daniel le acaban de mandar una lista con sus calificaciones,
 quiere saber si su promedio es suficiente para tener una beca este año,
  el promedio mínimo que necesita es 8, el programa recibirá la cantidad 
  de calificaciones y un arreglo 
de calificaciones para poder calcular el resultado

*/

const listaCalificacion = [10,6,7,8,10]
const promedioMinimo = 8

let promedio = 0
//let promedio = 0

for (let i =0; i < listaCalificacion.length; i ++ ){
    promedio = promedio + listaCalificacion[i]/listaCalificacion.length
}
console.log ('Tu promedio es :' + promedio)

if (promedio >= promedioMinimo){
    console.log ('Felicidades has obtenido una beca ')
}else {
    console.log('Tu promedio no alcanzo la beca ')
}