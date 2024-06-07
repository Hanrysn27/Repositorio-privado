// ex001

const entrada = require('readline-sync')
// let horas = parseFloat(entrada.question("Quantas horas trabalhadas mensais:"))
// let sal = parseFloat(entrada.question("qual seu ganho por hora:"))
// // let horasmen = horas * 4
// let salextra = horas - 160
// if (horas <= 160)
// {
//     saltotal = horas * sal
//     console.log(`seu salario deste mes e ${saltotal} `)
// }
// else
// {
//     saltotal = horas * sal
//     salextra = salextra * (sal * 1.5)
//      console.log (`seu salario com horas extras e de ${saltotal}`)
//      console.log (`a parte em horas extras foram: ${salextra}` )
// }


// // ex002

//  const salfixo = parseFloat(entrada.question("qual seu salario fixo:"))
// let vendas = parseFloat(entrada.question("valor das vendas:"))
// if (vendas > 1500)
// {
//     let valorvendas = ((vendas - 1500) * 0.05)
//     let salario = valorvendas + salfixo + (1500 * 0.03)
//     console.log (salario)
// }
// else
// {
//     console.log ((1500 * 0.03) + salfixo)
// }

// ex003

let conta = parseFloat(entrada.question("Numero da conta:"))
let saldo = parseFloat(entrada.question("qual seu saldo:"))
let debito = parseFloat(entrada.question("quanto vc deve:"))
let credito = parseFloat(entrada.question("qual seu credito:"))
let saldofinal = saldo - debito + credito
if ( saldofinal > 0)
{
    console.log("saldo positivo")
}
else
{
    console.log("saldo negativo")
}