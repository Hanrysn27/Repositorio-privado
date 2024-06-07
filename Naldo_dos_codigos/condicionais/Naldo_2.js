// const entrada = require('readline-sync')
// let nome = entrada.question('Qual seu nome?:')
// console.log (`${nome} seja bem vindo`)
// let idade = entrada.question('Qual sua idade?')
// console.log (`ent você tem ${idade}`)

// Require é o pra puxar a biblioteca, .question é para perguntas


// let num_1 = parseFloat(entrada.question ('Me diga um numero'))
// let num_2 = parseFloat(entrada.question ('Agora me diga outro numero')) // numeros vindo do teclado são considerados strings, ent é preciso converter o tipo
// let resultado = num_1 + num_2
// console.log (resultado)
// parse converte texto em numeros
// caso tente colocar textos no lugar de numero ele devolve o NaN (not a number)

const entrada = require('readline-sync')
// let numero_1 = parseFloat(entrada.question ("me diga um numero"))
// let numero_2 = parseFloat(entrada.question ("me diga mais um numero"))
// let numero_3 = parseFloat(entrada.question ("me diga outro numero"))
// let numero_4 = parseFloat(entrada.question ("me diga mais um numero"))
// let soma = numero_1 + numero_2 + numero_3 + numero_4
// let media = soma / 4
// console.log (`a media destes numeros é ${media}`)

// temperatura em F= C x 1,8 = 32

// let tempc = parseFloat(entrada.question ("Qual e a temperatura em celcius"))
// let tempf = tempc * 1.8 + 32
// console.log (`A temperatura em Celsius é ${tempf}`)

// toUpperCase() e toLowerCase()

// let frase = "BoM dIa TuRmA"
// let frase_mauisculo = frase.toUpperCase()
// // console.log(frase_mauisculo)
// let frase_minuscula = frase_mauisculo.toLocaleLowerCase()
// // console.log(frase_minuscula)

// trim remove espaços desnecessarios em frente e após a string

// let senha = ' adm '
// let senha_corrigida = senha.trim()
// console.log(senha_corrigida)

let frase = ' hoje Fui a Aula '
let frase_maior = frase.toUpperCase()
let frase_nova = frase_maior.trim()
console.log(frase_nova)