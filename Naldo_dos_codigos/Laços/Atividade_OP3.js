const entrada = require('readline-sync')


//001
let i = 0
while(i < 9)
{
    console.log('Hello World')
    i++
}

//002

let soma = 0
let contador = 1

while (contador <= 50)
{
    soma += contador
    contador++
}

console.log('A soma dos números de 1 a 50 é:', soma)

//003

let plus = 0
let o = 0;

while (o < 10) {
    let numero = parseFloat(entrada.question('Digite um numero:'))
    plus += numero;
    o++;
}

console.log('A soma dos 10 números é:', plus)

//004

let p = 0
let maioresDeIdade = 0

while (p < 10) 
{
    let idade = parseInt(entrada.question('Digite a idade da pessoa ',  p + 1, ':'))
    if (idade >= 18) 
    {
        maioresDeIdade++
    }
    p++
}

console.log('O número de pessoas maiores de idade é:', maioresDeIdade)

//005

let max = 0
let min = 0
let E = 1
while (E < 11)
{
    let numeros = parseFloat(entrada.question('Diga um numero'))
    if (E == 1)
    {
        max == numeros
        min == numeros
    }
    else
    {
        if(numeros > max)
        {
            max = numeros
        }
        if(numeros < min)
        {
            min = numeros
        }
    }
    if(max == 0 || min == 0)
    {
        max = numeros
        min = numeros
    }
    E++
}
console.log('O menor numero e', min)
console.log('O maior numero e', max)