// Cometario de lina
/*
Comentario de bloque
*/

/**
 * Comentario de bloque para documentar
 * 
 */

// alert('Funciona'); //obsoleto

/*
console.trace('Esto es una traza en el log');

console.info('Para informar sobre cosas');
console.log('Console . log');

var a = 2;

console.debug('la variable a vale = ' + a);
*/

// console.warn('Houston tenemos un problema');

// console.error('Falla la conexion con el servidor rest')

/*
Boton click y sacamos de un array a todos los alumnos random

*/

function buscarVoluntario() {
    console.trace('click');

    var nombreEl = document.getElementById('nombre');
    var nombre = nombreEl.innerHTML;
    console.log(nombre);
    nombreEl.innerHTML = "ANDER";

    var arrayAlumnos = [
        'Endika',
        'Iñigo',
        'Kiryl',
        'Juan Carlos',
        'Maria',
        'Alejandro',
        'Ana',
        'Cristian',
        'Erlantz',
        'Raúl',
        'Joseba',
        'Mikel',
    ];

    var numeroAleatorio = Math.floor(Math.random() * arrayAlumnos.length);
    //console.log(numeroAleatorio);

    //nombreEl.innerHTML = arrayAlumnos[numeroAleatorio];
    var tablaEl = document.getElementById('Tabla');
    console.log(tablaEl.rows);


    var tablaArray = tablaEl.rows;
    var tableElements = [];

   /*for(var i = 0, row; row = table.rows[i]; i++) {

    }*/
    
}