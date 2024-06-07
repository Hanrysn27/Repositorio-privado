const entrada = require("readline-sync") 
let numero = parseFloat(entrada.question('Digite um numero inteiro:  '))
console.log(`tabuada do ${numero}:`)
for (let i = 0; i <= 1000000000; i++) 
{
    console.log(`${numero} x ${i} = ${numero * i}`);
}