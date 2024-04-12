const entrada = require('readline-sync')

//001

// let num = Math. floor(Math. random(1 && 10) * (10 - 1 + 1)) + 1
// console.log(num) 

// let num1 = null
// while(num != num1)
// {
//     num1 = parseFloat(entrada.question(console.log('um numero entre 1 e 10 foi sorteado tente advinhar qual e:')))
//     if(num1 == num)
//     {
//         console.log('Voce acertou!!')
//         break;
//     }
//     else if(num1 < num)
//     {
//         console.log('O numero que voce escolheu e menor que o sorteado')
//     }
//     else if (num1 > num)
//     {
//         console.log('O numero que voce escolheu e maior que o sorteado')
//     }
//     if(num1 > 10 || num1 < 1)
//     {
//         console.log('Seu numero não esta dentro da lista')
//     }
// }

//002
let o = false
let a = parseFloat(entrada.question('Digite 1 para rolar os dados, e 2 para sair'))
let dado1 = null
let dado2 = null
let dadoT = null
if(a == 1)
{
    while(o == true)
{
    dado1 = Math. floor(Math. random(1 && 6))
    dado2 = Math. floor(Math. random(1 && 6))
    dadoT= dado1 + dado2
    if(dadoT == 7 || dadoT == 11)
    {
        console.log('Você venceu, a soma dos seus dados deu', dadoT)
        o == true
    }
    else if(dadoT == 2 || dadoT == 3 || dadoT == 12)
    {
        console.log('Voce perdeu, a soma dos seus dados deu', dadoT)
        o == true
    }
    else
    {
        console.log('Seus dados não deram nenhum resultao, a soma foi de', dadoT)
    }
}
}
else if(a == 2)
{
    console.log('voce escolheu sair')
}
else
{
    console.log('Esta opcao nao e valida!')
}










// if(dadoT == 7 || dadoT == 11)
// {
//     console.log('Voce venceu!')
// }
// else if(dadoT == 12 || dadoT == 3 || dadoT == 2)
// {
//     console.log('Voce perdeu!')
// }
// else if(dadoT != 12 || dadoT != 3 || dadoT != 2 || dadoT != 7 || dadoT != 11)
// {
    
// }
