const entrada = require('readline-sync')

const senha = "123"
let tent = 2
for(let i = 0; i < 3; i++)
{
    let pass = entrada.question('Digite sua senha:')
    if(pass == senha)
    {
        console.log('acesso liberado')
    }
    else if(tent == 0)
    {
        console.log('Numero de tentativas excedidas, sua conta foi bloqueada')
    }
    else
    {
        console.log('Senha incorreta. Voce tem mais', tent, 'tentativas')
    }
    tent -= 1
}
