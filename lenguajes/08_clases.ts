
interface Joven {
    aficiones: Array<string>;
}

class Person {
    /* nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    } */
    constructor(
        public nombre: string,
        public edad: number,
        public empleo: string = '') {
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const p1 = new Person('Juan', 23);
console.log(typeof p1);
console.log(p1);
const p2 = new Person('Rosa', 36);
console.log(p2);

p1.saludar();
p2.saludar();

class Alumno extends Person implements Joven {
    curso: string;
    aficiones: Array<string>;
    constructor(nombre: string, edad: number, curso: string) {
        super(nombre, edad);
        this.curso = curso;
    }
    saludar() {
        super.saludar();
        console.log(`Estudio ${this.curso}`);
    }
}

const a1 = new Alumno('Luis', 25, 'Angular');
a1.empleo = 'Programador';
console.log(a1);
a1.saludar();

let user1: Person; // Clase como tipo
let user2: Joven; // Interfaz como tipo

user2 = {aficiones: []}
user1 = {nombre: '', edad: 0, empleo: '',
        saludar: () => {}};
console.log(user1);

let u3: Person;
u3 = new Alumno('Luis', 25, 'Angular');
console.log((u3 as Alumno).curso);

u3.saludar();



