/*Joel tiene que informar a sus alumnos las materias que reprobaron,
 el tiene una lista de alumnos, cada alumno tiene un nombre y una lista de materias, 
 cada materia tiene su nombre y su calificación, el promedio mínimo para aprobar es 6. 
Haz un algoritmo que escriba el nombre del alumno y la materia que reprobó*/


const lista_alumnos = [{ 
    nombre: 'Mary',
    lista_materias: [ {
        nombre: 'mate', 
        cal: 5
    }, 
    {
        nombre: 'historia', 
        cal: 9
    }, 
    {   nombre: 'ingles', 
        cal: 9
    }]
},  
{
    nombre: 'yesi',
    lista_materias: [{
            nombre: 'mate', 
            cal: 9
        }, 
        {
            nombre: 'historia', 
            cal: 6
        }, 
        {   nombre: 'ingles', 
            cal: 5
        }]
    }] 
let i = 0
for (i; i < lista_alumnos.length; i ++){
    for(let j =0; j < lista_alumnos[i].lista_materias.length; j++ ){

        if (lista_alumnos[i].lista_materias[j].cal < 6){
           var materia = lista_alumnos[i].lista_materias[j].cal 
           var nombreMateria = lista_alumnos[i].lista_materias[j].nombre
           var fulanito = lista_alumnos[i].nombre
            console.log ('El alumno : ' + fulanito + ' reprobó la materia ' + nombreMateria)

        }
    }
}

