const entrada = require('readline-sync')
// O usuario vai informar um numero qualquer
// e o programa deve devolver a raiz quadrada desse numero

let num = parseFloat(entrada.question('Me diga um numero'))
let raiz = Math.sqrt(num)
console.log (raiz)
