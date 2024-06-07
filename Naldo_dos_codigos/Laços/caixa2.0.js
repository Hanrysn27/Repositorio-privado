
const entrada = require('readline-sync')

let tentativa = 0
let saldo = 0
while(tentativa < 3)
{
    let senha = entrada.question('Senha: ')
    if(senha != '123')
    {
        tentativa++
        if(tentativa == 3)
            console.log('Numero de tentativas excedidas! Acesso negado')
        else
            console.log('Senha incorreta!') 
    }
    else
    {
        console.log('Bem vindo')
        let opcao = 0
        while(opcao != 4)
        {
            opcao = parseInt(entrada.question(`Saldo: ${saldo}\n1 - Saque\n2 - Deposito\n3 - Emprestimo\n4 - Sair\nDigite uma opcao: `))
            switch (opcao) {
                case 1: 
                    let saque = parseFloat(entrada.question('Valor: '))
                    if(saque <= saldo && saque > 0)
                    {
                        saldo -= saque
                        console.log(`Novo saldo: R$${saldo}`)
                    }
                    else{
                        console.log('Valor invalido!')
                    }     
                    break;
                case 2:
                    let deposito = parseFloat(entrada.question('Valor: '))
                    if(deposito > 0)
                    {
                        saldo += deposito
                        console.log(`Novo saldo: R$${saldo}`)
                    }
                    else{
                        console.log('Valor invalido!')
                    }     
                    break;        
                case 3:     
                    let emprestimo =  parseFloat(entrada.question('Valor: '))
                    if(emprestimo <= (saldo/3) && emprestimo > 0)
                    {
                        console.log('Emprestimo aprovado!')
                        saldo += emprestimo
                        console.log(`Novo saldo: R$${saldo}`)
                    }
                    else
                    {
                        console.log('Emprestimo negado!')
                    }
                    break;
                case 4:   
                    process.exit()
                default:
                    console.log('Opcao invalida!')
                    break;
            }
        }
        break
    }
}