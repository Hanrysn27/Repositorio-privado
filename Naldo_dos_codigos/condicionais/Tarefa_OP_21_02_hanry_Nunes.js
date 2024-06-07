//TAREFAS OPCIONAIS
// Ex001
const entrada =require('readline-sync')
let cap = parseFloat(entrada.question('Informe seu capital:'))
let tax = parseFloat(entrada.question('Informe sua taxa de juros:'))
 let tem = parseFloat(entrada.question('Informe seu tempo de aplicacao:'))
 let juros = (cap * tax * tem)
 console.log(juros)

 //Ex002
 let capi = parseFloat(entrada.question('Informe seu capital:'))
 let taxa = parseFloat(entrada.question('Informe sua taxa de juros:'))
 let tim = parseFloat(entrada.question('Informe seu tempo de aplicacao:'))
 let comp =(cap * (1 + taxa**tim))
 console.log(comp)

//Ex003
let reais =  parseFloat(entrada.question('Valor da sua moeda:'))
let dolar = (reais / 4.93)
console.log(dolar)

//Ex004
let prod = parseFloat(entrada.question('Valor do seu produto:'))
let desc = parseFloat(entrada.question('Valor do desconto:'))
let valor_final = ((desc / 100) * prod) 
console.log(valor_final)

//Ex005
let num = Math.random(0 && 11)
let tentativa = parseFloat(entrada.question('Descubra o numero:'))
if (tentativa > num)
{
    console.log(parseFloat(entrada.question(`esse numero e menor do que ${tentativa}, vc tem somente mais duas chances:`)))
}
else if(tentativa < num)
{
    console.log(parseFloat(entrada.question(`esse numero e maior do que ${tentativa}, vc tem somente mais duas chances:`)))
}
else if (tentativa == num)
{
    console.log('Você acertou!')
}

//Ex006
let jogador1 = entrada.question('pedra, papel, ou tesoura!')
let jogador2 = entrada.question('pedra, papel, ou tesoura!')
if (jogador1 == 'pedra')
{
    if (jogador2 == 'papel')
    {
        console.log('papel enrola pedra')
    }
    else if (jogador2 == ' tesoura')
    {
        console.log('pedra quebra tesoura')
    }
    else if (jogador2 == pedra)
    {
        console.log(empate)
    }
}
if ((jogador1 == 'papel'))
{
    if (jogador2 == 'tesoura')
    {
        console.log('tesoura corta papel')
    }
    else if (jogador2 == 'pedra')
    {
        console.log("papel enrola pedra")
    }
    else if (jogador2 == 'papel')
    {
        console.log('empate')
    }
}
if (jogador1 == 'tesoura')
{
    if(jogador2 == 'papel')
    {
        console.log('tesoura corta papel')
    }
    else if (jogador2 == 'pedra')
    {
        console.log('pedra quebra tesoura')
    }
    else if (jogador2 == 'tesoura')
    {
        console.log('empate')
    }
}