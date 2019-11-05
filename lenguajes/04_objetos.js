// Objetos literales
const oDatos = {nombre: 'Pepe', edad: 32}
console.log(typeof oDatos)
console.log(oDatos)

function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}

Persona.prototype.saludar = function (params) {
        console.log(`Hola, soy ${this.nombre}`)
    }


const p1 = new Persona('Juan', 34)
console.log(typeof p1)
console.log(p1)
const p2 = new Persona('Rosa', 36)
p2.altura = 164
console.log(p2)

p1.saludar()
p2.saludar()