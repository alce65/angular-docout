// En ES6

class Person {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

const p1 = new Person('Juan', 34)
console.log(typeof p1)
console.log(p1)
const p2 = new Person('Rosa', 36)
p2.altura = 164
console.log(p2)

p1.saludar()
p2.saludar()

class Alumno extends Person {
    constructor (nombre, edad, curso) {
        super(nombre,edad)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}

const a1 = new Alumno('Luis', 25, 'Angular')

console.log(a1)
a1.saludar()