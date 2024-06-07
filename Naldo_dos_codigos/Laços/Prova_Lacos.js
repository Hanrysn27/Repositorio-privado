const entrada = require('readline-sync')
let C = 0

let ValorT = 0
console.log('Seja bem vindo')
let B = entrada.question(`O que gostaria de fazer? \n1 - passar compra \n2 - Sair `)
if(B == 1)
{
    while(C != 3)
    {
        entrada.question('Qual produto deseja passar?')
        let produto = parseFloat(entrada.question('Qual o valor do produto?'))
        let quantidade = parseFloat(entrada.question('Qual a quantidade desse produto?'))
        ValorT = ValorT + (produto * quantidade)
        console.log(`O valor da sua compra e ${ValorT}`)
            
        let B2 = parseInt(entrada.question('Deseja adicionar mais algum item ao carrinho?\n1 - sim \n2 - nao'))
        if(B2 == 1)
        {}
        else if(B2 == 2)
        {
            console.log(`O valor total ficou em ${ValorT}`)
            console.log('saindo do caixa\n Obrigado pela preferencia')
            C = 3
        }
        else
        {
            console.log('Opção invalida')
            C = 3
        }
    }
}
else if(B == 2)
{
    console.log('Saindo!')
}
else
{
    console.log('Opcao invalida!')
}