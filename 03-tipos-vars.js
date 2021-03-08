const num = 10.10
const str = `Meu número é: ${num}`
console.log(str)

const obj = {
    name: 'Lecio Vilela',
    cidade: {
        nome: 'Uberaba',
        uf: 'MG'
    }
}

const key = 'name'
console.log(obj[key])

const arr = [1, 2, 3]
console.log(arr)

// functions: first-class citizens - A referência da função é diferente da sua invocação
const toInt = parseInt
console.log(toInt('10') + 1)

