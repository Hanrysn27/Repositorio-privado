const entrada = require('readline-sync')
console.log ('o preço da gasolina e de 5.58')
const preço = 5.58
let litros = parseFloat(entrada.question('quantos litros voce quer:'))
let valortotal = litros * preço
console.log (`o preco a ser pago ${valortotal}`)

// ex002

let rpd = 1.2
let cavalos = parseFloat(entrada.question('quantos cavalos'))
let tdk = cavalos * rpd * 30
console.log (`total de quilos necessarios ${tdk}`)

// ex003

