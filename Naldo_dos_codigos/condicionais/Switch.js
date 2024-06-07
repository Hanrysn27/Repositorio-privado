const entrada = require('readline-sync')

let opcao = parseFloat(entrada.question('escolha entre 1 2 3'))
switch (opcao) {
    case 1:
        console.log('saque')        
        break;
    case 2:
        console.log('deposito')
        break;
    case 3:
        console.log('sair')
        break; 
    default:
        console.log('invalido')
        break;
}