const nums = [1, 2, 3, 4]

const testeForEach = (value, index, arr) => {
    console.log(value, index, arr)
}

const retForEach = nums.forEach(testeForEach)
console.log('Retorno forEach', retForEach)

const testMap = (value, index, arr) => {
    console.log(value, index, arr)
    return value * 3
}
const reMap = nums.map(testMap)

console.log('Retorno map', reMap)

const testReduce = (previousValue, currentValue, currentIndex, arr) => {
    console.log(previousValue, currentValue, currentIndex, arr)
    return previousValue + currentValue

}
const retReduce = nums.reduce(testReduce, 0)
console.log('Retorno reduce', retReduce)

const soma = nums
    .map(a => a * 2)
    .reduce((a, b) => a + b)

console.log(soma)