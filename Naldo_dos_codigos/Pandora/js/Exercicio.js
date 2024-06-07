
const entrada = require('readline-sync')
let senha = "123"
let pin = entrada.question('Digite a Senha')
if (pin == "" || pin == null)
{
    console.log('DIGITE ALGO')
}
if (pin != senha)
{
   console.log('Senha Incorreta')
}
else if (pin == senha)
{
    console.log(`bem vindo(a), voce tem R$100 em sua conta, o que deseja fazer? 
    1-saque, 
    2-deposito, 
    3-sair`)
    let saldo = 100

    let escolha = parseFloat(entrada.question('escolha uma opcao'))
    if (escolha == 1)
    {
        let saida = parseFloat(entrada.question('quanto deseja sacar:'))
        if(saida < saldo)
        {
        console.log(`saque efetuado no valor de ${saida}`, 'seu saldo e de', saldo - saida)
        newsaldo = saldo - saida
        }
        else if(saida > saldo || saida == '' || saida == null)
        {
            console.log('operacao impossivel, saldo insuficiente, ou valor invalido')
        }
    
    }
    else if (escolha == 2)
    {
        let etr = parseFloat(entrada.question('quanto deseja depositar:'))
        if (etr > 0)
        {
            console.log(`deposito efetuado com sucesso no valor de ${etr}`, 'seu saldo atual e de', saldo + etr)
            newsaldo = saldo + etr
        }
        else if(etr < 0 || etr == 0 || etr == '' || etr == null)
        {
            console.log('operacao impossivel, saldo insuficiente, ou valor invalido')
        }
    }
    else if (escolha == 3)
    {
        console.log(`Finalizando serviços, obrigado pela preferencia`)
    }
    else
    {
        console.log('escolha incoerente com as opcaos')
    }   
    
}