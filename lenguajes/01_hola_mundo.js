'use strict'
console.log('hola mundo')

// ES6

let pruebaDatos = 23 
const user = 'Pepe'
pruebaDatos = true
//user = 'Juan' // Error
console.log(pruebaDatos)

const oDatos = {nombre: 'Pepe', edad: 32}
const aDatos = ['Pepe', 32]

oDatos.altura = 170
oDatos.nombre = 'Jose'
// oDatos = {nombre: 'Pepe', edad: 32} //Error
aDatos.push(89)
console.log(oDatos)

const oDatos2 = oDatos
oDatos2.edad = 19
delete oDatos2.altura

console.log(oDatos)

console.log(aDatos)

