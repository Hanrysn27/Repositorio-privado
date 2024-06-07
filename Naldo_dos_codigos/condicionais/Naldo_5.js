// E e OU (&&) = E
// (||) = OU
const entrada =require('readline-sync')
let jogador1 = entrada.question('pedra, papel, ou tesoura!')
let jogador2 = entrada.question('pedra, papel, ou tesoura!')
if(jogador1 == 'papel' && jogador2 == 'tesoura')
{
    console.log(`${jogador2} Venceu`)
}
else if(jogador1 == 'papel' && jogador2 == 'pedra')
{
    console.log(`${jogador1} Venceu`)
}
else if(jogador1 == 'papel' && jogador2 == 'papel')
{
    console.log('empate')
}
if(jogador1 == 'pedra' && jogador2 == 'tesoura')
{
    console.log(`${jogador1} Venceu`)
}
else if(jogador1 == 'pedra' && jogador2 == 'pedra')
{
    console.log(`Empate`)
}
else if(jogador1 == 'pedra' && jogador2 == 'papel')
{
    console.log(`${jogador2} Venceu`)
}
if(jogador1 == 'tesoura' && jogador2 == 'tesoura')
{
    console.log(`Empate`)
}
else if(jogador1 == 'tesoura' && jogador2 == 'pedra')
{
    console.log(`${jogador2} Venceu`)
}
else if(jogador1 == 'tesoura' && jogador2 == 'papel')
{
    console.log(`${jogador1} Venceu`)
}