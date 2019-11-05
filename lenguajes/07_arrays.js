const aDatos = [23, 43, 76, 89, 66, 25]

// ES5.1


let aCubos = aDatos.map( item => item*item*item)
console.log(aCubos)

let aPares = aDatos.filter(item =>!(item%2) )
console.log(aPares)

let total = aDatos.reduce((a,b)=> a+b)
console.log(total)

aDatos.forEach( (item, i) => {
    console.log(i, item)
})

// ES6
for (const item of aDatos) {
    console.log(item)
}

let o = {
    user: 'Pepe',
    empleo: {
        emresa: 'Google',
        cargo: 'CEO',
        fecha: new Date()
    }
}

// let b = {...o}

let b = JSON.parse(JSON.stringify(o))
b.empleo.fecha = new Date(b.empleo.fecha)
b.user = 'Luis'

b.empleo.cargo = 'Analista'

console.log(o,b)