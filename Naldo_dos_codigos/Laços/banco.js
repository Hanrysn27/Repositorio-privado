const entrada = require('readline-sync')
let saldo = 0
const senha = "123"
let tent = 2
while(tent != 0)
{
    let pass = entrada.question('Digite sua senha:')
    if(pass == senha)
    {
        
            console.log('acesso liberado. Seja bem vindo')
            let escolha = entrada.question
            (`
            Escolha uma opcao
            1 - Saque
            2 - Deposito
            3 - Emprestimo
            4 - Sair
            `)
        
        
        if (escolha == 1) //Saque
        {
            let saida = parseFloat(entrada.question('quanto deseja sacar:'))
                if(saida < saldo)
                {
                    console.log(`saque efetuado no valor de ${saida}`, 'seu saldo e de', saldo - saida)
                    saldo = saldo - saida
                }
            else if(saida > saldo || saida == '' || saida == null)
            {
                console.log('operacao impossivel, saldo insuficiente, ou valor invalido')
            }
            let a = entrada.question
            (`
                Deseja continuar o programa ou sair?
                1 - continuar
                2 - sair
            `)
            if(a == 1)
            {
                console.log('voltando ao menu')
            }
            else if(a == 2)
            {
                console.log ('saindo')
                tent = 0
                break;
            }
        }


        else if (escolha == 2) //Deposito
        {
            let etr = parseFloat(entrada.question('quanto deseja depositar:'))
            if (etr > 0)
            {
                console.log(`deposito efetuado com sucesso no valor de ${etr}`, 'seu saldo atual e de', saldo + etr)
                saldo = saldo + etr
            }
            else if(etr < 0 || etr == 0 || etr == '' || etr == null)
            {
                console.log('operacao impossivel, saldo insuficiente, ou valor invalido')
            }
            let a = entrada.question
            (`
                Deseja continuar o programa ou sair?
                1 - continuar
                2 - sair
            `)
            if(a == 1)
            {
                console.log('voltando ao menu')
            }
            else if(a == 2)
            {
                console.log('saindo')
                tent = 0 
                break;
            }
        }


        else if(escolha == 3) //Emprestimo
        {
            let emp = parseFloat(entrada.question('Qual o valor do emprestimo que deseja:'))
            let parcelas = parseInt(entrada.question('Em quantas prestacoes deseja pagar?'))
            console.log(saldo)
            if(emp < saldo / 3)
            {
                console.log
                (`
                    Emprestimo aprovado!
                    O valor de cada parcela e de ${parcelas / emp}
                `)
            }
            else
            {
                console.log
                (`
                Emprestimo negado!
                Valor maximo excedido
                `)
            }
            let a = entrada.question
                (`
                Deseja continuar o programa ou sair?
                1 - continuar
                2 - sair
                `)
            if(a == 1)
            {
                console.log('voltando ao menu')
            }
            else if(a == 2)
            {
                console.log('saindo')
                tent = 0
                break;
            }
        }


        else if (escolha == 4) //Finalização
        {
            console.log(`Finalizando serviços, obrigado pela preferencia`)
            break;
        }
            else
        {
            console.log('escolha incoerente com as opcaos')
        }   
    }
    
    else if(tent == 0)
    {
        console.log('Numero de tentativas excedidas, sua conta foi bloqueada')
    }
    else
    {
        console.log('Senha incorreta. Voce tem mais', tent, 'tentativas')
        tent -= 1
    }
}