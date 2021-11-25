'use strict'


console.log('Hola Mundo, desde mi portafolio');


function Multiplica(a,b) {
    let resultado = 0;
    for (let index = 1; index <= b; index++) {
        resultado = resultado + a;
        
    }
    return resultado
}

console.log(mult(7,15));