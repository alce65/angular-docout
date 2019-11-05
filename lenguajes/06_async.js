function asinc(clave, time, callback) {
    setTimeout(() => {
        let result = `Datos sobre ${clave}`
        callback(result)
    }, time )
}

/* asinc('Angular', 2000, (datos) => {
        console.log(`Nos ha llegado info: ${datos}`)
    }) */
   

////////////////////////

function asincP(clave, time) {
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            const n = Math.random()
            if (n < 0.5) {
                // ok
                resolve(` ${n} - Datos sobre ${clave}`)
            } else {
                // error
                reject(new Error(`Error num. ${n}`))
            }
        },time )
    })
}

asincP('Angular', 1000)
.then( (datos) => {
    console.log(`Nos ha llegado info: ${datos}`)
})
.catch( (error) => {
    console.error('Lo sentimos: ' + error.message)
} )

/// Async / await (ES 2017)

/*  (async function () {
    try {
        let datos = await asincP('Angular', 1000)
        console.log(`Nos ha llegado info: ${datos}`)        
    } catch (error) {
        console.error('Lo sentimos: ' + error.message)
    }
})() */


