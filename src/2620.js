// Counter

var createCounter = function (n) {
  let numero = n - 1
  return function () {
    numero++
    return numero
  }
}

const newFunc = createCounter(10)

console.log(newFunc())
console.log(newFunc())
console.log(newFunc())
console.log(newFunc())
