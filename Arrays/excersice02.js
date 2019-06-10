/*Joel quiere ver el porcentaje de veces que falto a clases, el programa 
recibirá un arreglo de asistencias para poder calcular el resultado, cada 
elemento esta representado por un valor booleano*/
const asistencias = [true, false, true, true, false,true] //valores booleanos

let total = 0

for (let i =0; i < asistencias.length; i +=1){
    if (asistencias[i]){
        total++
    }
}
const porcentaje = total/asistencias.length*100
console.log('total de asistencias:'+ porcentaje)