function suma(...datos) {

    console.log(datos)
    
}

suma(2,3,4)

aDatos = [2,4,7,4,3,1]
// Clonado del array
aDatos2 = [...aDatos]
aDatos.sort()
console.log(aDatos)
console.log(aDatos2)

// Clonado el objeto (no deep)
oPersona = {name: 'Pepe', edad : 23}
oPersona2 = {...oPersona}
oPersona2.edad = 56
console.log(oPersona2)
console.log(oPersona)