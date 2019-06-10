/*Joel recibió una lista de las evaluaciones que hicieron sus alumnos, 
las calificaciones son de 1 a 5, para poder aprobar Joel necesita obtener una calificación de 4, 
crea un programa que evalúe una lista de calificaciones y le diga si esta aprobado o no
*/

const lista_evaluacion = [5,3,5,5,3,4]

let i = 0
let suma = 0
for (i; i< lista_evaluacion.length; i++){
    suma = suma + lista_evaluacion[i]
}
    const promedio = suma /  lista_evaluacion.length
    if (promedio >=4){
        console.log ('aprobado')
    }else {
        console.log ('no aprobado')

    }