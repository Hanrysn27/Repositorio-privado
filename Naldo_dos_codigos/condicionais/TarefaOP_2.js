const entrada = require('readline-sync')

//Ex001
let emp = parseFloat(entrada.question('qual o valor do emprestimo que deseja'))
let par = parseFloat(entrada.question('em quanto tempo deseja parcelar'))
let tax =  parseFloat(entrada.question('qual e a porcentagem de juros aplicado em decimal'))
let renda = parseFloat(entrada.question('qual sua renda'))
let parj = ((emp * tax) + emp) / par

if (parj < 0.3 * renda || parj == renda)
{
    console.log(`seu emprestimo foi aprovado com cada parcela sendo de ${parj}`)
}
else
{
    console.log('seu emprestimo foi negado')
}

//Ex002
let ano = parseFloat(entrada.question("qual e o ano atual"))
if ((ano % 400 == 0) || (ano % 4 == 0) && (ano % 100 != 0))
{
    console.log('ano bissexto')
}
else
{
    console.log('ano nao bissexto')
}



//Ex003
let moto = 5.00
let carro = 10.00
let caminhao2 = 20.00
let caminhao3 = 30.00

let veiculo = entrada.question(`qual seu veiculo:
moto
carro
caminhao`)
if (veiculo == 'caminhao')
{
    let eix = entrada.question(`quantos eixos tem seu caminhao:
    2 
    ou
    3`)
    if (eix == 2)
    {
        console.log('o valor de cobrança do pedagio e', caminhao2, 'Reais')
    }
    else if (eix == 3)
    {
        console.log('o valor de cobrança do pedagio e', caminhao3, 'Reais')
    }
}
else if (veiculo == 'moto')
{
    console.log('o valor de cobrança do pedagio e', moto, 'Reais')
}
else if (veiculo == 'carro')
{
    console.log('o valor de cobrança do pedagio e', carro, 'Reais')
}

// Desafio
let senha = entrada.question('qual é a sua senha para a verificacao')
let num = senha.length
let letrasMaiusculas = /[A-Z]/;
let letrasMinusculas = /[a-z]/; 
let numeros = /[0-9]/;
let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
if (num >= 8)
{  
    if (letrasMaiusculas.test(senha) && letrasMinusculas.test(senha))
    {
     if (numeros.test(senha))
     {
       if (caracteresEspeciais.test(senha))
       {
        console.log('sua senha é forte')
       }
       else
       {
        console.log('sua senha precisa de caracteres especiais')
       }
     }
     else
     {
        console.log ('sua senha precisa de numeros')
     }
    }
    else
    {
        console.log ('A senha deve conter caracteres maiusculos e minusculos')
    }
}

else
{
    console.log('senha fraca, deve conter no minimo 8 algarismos')
}



