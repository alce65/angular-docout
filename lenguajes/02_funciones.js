// Declaracion
function suma(a,b) {
    return a + b
}

// Asignacion
const resta = function (a,b) {return a - b}

/* console.log(suma(12, 7))
console.log(typeof suma)
console.log(resta(12, 7))
console.log(typeof resta) */

function operar (a, b, callback) {
    console.log(callback(a,b))
}

operar(12, 65, suma)
operar(12, 65, resta)
operar(3, 7, function (x,y) {
    return x * y
} )

setTimeout(function() {console.log('Por fin')}, 2000)

// ES6

operar(3, 7, (x,y) => x / y )

operar (5, null,  x => x*x)

// Cadenas

let cadena = "Hola"
let cadenaMejor = 'Hola'

console.log(cadena, cadenaMejor)

// ES6 - template strings

let template = `
    Texto ${cadenaMejor}
`
console.log(template)
