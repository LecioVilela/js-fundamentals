/*function opa() {
    let i = 10
    console.log('opa!', i)
}

function ola() {
    opa()
    console.log('olá!')
}

ola()
ola()*/

//this is an arrow function, do not use "function" but we can use the "=>" <- That's an arrow, that's why we call ARROW FUNCTION
const multiplicar = (a, b) => a * b
const dobra = num => multiplicar(num, 2)

const val = dobra(10)
console.log(val)