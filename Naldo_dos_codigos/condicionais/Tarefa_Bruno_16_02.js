// ex001

const entrada = require('readline-sync')

let num_1 = parseFloat(entrada.question("diga um numero:"))
if ( num_1 == 0)
{
    console.log("zero")
}
if (num_1 <= -1)
{
    console.log("negativo")
}
if (num_1 >= 1)
{
    console.log("positivo")
}

//ex002

const valor1 = parseFloat(entrada.question('digite um valor:'))
const valor2 = parseFloat(entrada.question('digite um valor:'))
const valor3 = parseFloat(entrada.question('digite um valor:'))
let maior = 0
let menor = 0
let medio = 0
if (valor1 > valor2 && valor1 > valor3)
{
    maior = valor1
}
else if(valor1 < valor2 && valor1 < valor3)
{
    menor = valor1
}
else
{
    medio = valor1
}

if (valor2 > valor1 && valor2 > valor3)
{
    maior = valor2
}
else if(valor2 < valor1 && valor2 < valor3)
{
    menor = valor2
}
else
{
    medio = valor2
}
if (valor3 > valor2 && valor3 > valor1)
{
    maior = valor3
}
else if(valor3 < valor2 && valor3 < valor2)
{
    menor = valor3
}
else
{
    medio = valor3
}
console.log('menor', menor)
console.log('medio', medio)
console.log('maior', maior)

//ex003

const team1 = entrada.question('Qual seu time:')
const point1 = parseFloat(entrada.question('Quantos gols:'))
const team2 = entrada.question('Qual o oponente:')
const point2 = parseFloat(entrada.question('Quantos gols:'))
if (point1 == point2)
{
    console.log('empate')
}
else if (point1 > point2)
{
    console.log(`o vencedor é ${team1} com ${point1} gols`)
}
else
{
    console.log(`o vencedor é ${team2} com ${point2}`)
}

//ex004

