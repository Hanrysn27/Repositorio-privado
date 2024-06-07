const entrada = require('readline-sync')
// Primeira estruturas fundamental da programação 
//quatro estruturas fundamentais da programação em ordem (condicionais, laços de repetição, vetores, metodos e funções)
// CONDICIONAIS (estrutura de decisão)
// IF/ELSE

// let idade = parseInt(entrada.question('Qual sua idade: '))
// if(idade >= 18)                                  // verdadeiro
// {
//     console.log('maior de idade')
// }                   
// else
// {
//     console.log ('menor de idade')
// }                                               // falso

// O usuario vai informar um numero e o programa deve retornar se é par ou impar

// let num = parseFloat(entrada.question('diga um numero: '))
// if (num % 2 == 0)
// {
// console.log ("par")
// }
// else
// {
// console.log ("impar")
// }

// crie um programa que peça para o aluno inserir 4 notas, faça a media e retorne se 
// ele foi aprovado ou não
// Média >=7 aprovado
// Média < 7 reprovado

// let num1 = parseFloat(entrada.question('diga sua nota:'))
// let num2 = parseFloat(entrada.question('diga sua nota:'))
// let num3 = parseFloat(entrada.question('diga sua nota:'))
// let num4 = parseFloat(entrada.question('diga sua nota:'))
// let media = (num1 + num2 + num3 + num4) / 4
// if(media >= 7)
// {
//     console.log("Voce foi aprovado, com a media de" + media)
// }
// else
// {
//     console.log('Voce foi reprovado com a media de' + media)
// }


// O usuario deve inserir dois numeros, e o programa deve dizer qual é maior e o menor entre eles

let num1 = parseFloat(entrada.question('diga um numero:'))
let num2 = parseFloat(entrada.question('diga mais numero:'))
if(num1 < num2)
{
    console.log(`este é maior ${num2}`)
}
else
{
    console.log(`este é menor ${num1}`)
}