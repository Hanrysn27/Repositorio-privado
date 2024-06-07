const entrada = require('readline-sync')

// Ex001

for(let A = 0; A < 10; A++)
{
    console.log('Hello World')
}

// Ex002
let soma = 0
for(let B = 0; B <= 50; B++)
soma += B
{
    console.log('soma de 1 a 50 e', soma)
}
    
// Ex003
let N1 = 0
for(let C = 0; C < 10; C++)
{
    let N2 = parseFloat(entrada.question('diga um numero'))
    N1 += N2
}

console.log(N1)

// Ex004

for(let D = 0; D < 10; D++)
{
    let idade = parseFloat(entrada.question('qual sua idade?'))
    if(idade >= 18)
    {
        console.log('Voce e maior de idade')
    }
    else
    {
        console.log('Voce e menor de idade')
    }
}

// Ex005

let max = 0
let min = 0

for (let E = 0; E < 10; E++)
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
}
console.log('O menor numero e', min)
console.log('O maior numero e', max)

