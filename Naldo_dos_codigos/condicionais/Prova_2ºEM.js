const entrada = require('readline-sync')

// Ex001

let bill = parseFloat(entrada.question('Qual o valor de sua compra:'))

if(bill < 50 && bill > 0 && bill != 0)
{
    console.log(`O valor total de sua compra e de ${bill}, sem nenhum desconto aplicado.
    Obrigado pela preferencia`)
}
else if(bill >= 50 && bill < 100)
{
    bill = bill - (bill * 0.05) 
    console.log(`O valor total de sua compra e de R$${bill}, com a aplicão de 5% de desconto.
    Obrigado pela preferencia`)
}
else if(bill >= 100)
{
    bill = bill - (bill * 0.1)
    console.log(`O valor total de sua compra e de R$${bill}, com a aplicão de 10% de desconto.
    Obrigado pela preferencia`)
}
else
{
    console.log('Digite algo, e não escreva letras, e não digite numeros negativos')
}

// Ex002

let vendas = parseFloat(entrada.question("Quantos carros vendidos?"))
let sal = parseFloat(entrada.question("Qual seu salario fixo?"))
let acres = parseFloat(entrada.question("Qual o valor de sua comissao por carro vendido?"))
let valorvend = parseFloat(entrada.question("Qual o valor total de suas vendas?"))
let comiss = (((vendas * acres) /100) * sal) + sal
comiss = comiss + (valorvend * 0.05)
console.log(`Seu salario fixo é de ${sal}, e com a comissao de ${acres} a cada carro vendido e 5% do valor total de suas vendas,
Seu salario final foi de ${comiss}`)

// Ex003

let pesomor = parseFloat(entrada.question('Quantos quilos de morango deseja comprar?'))
let pesomac = parseFloat(entrada.question('Quantos quilos de maca deseja comprar?'))
let pesototal = pesomor + pesomac
if (pesomor <5 && pesomac < 5)
{
    let valormor = pesomor * 2.50
    let valormac = pesomac * 1.80
    console.log(`O valor total e de ${valormac + valormor}`)
    if (valormac + valormor > 25 || pesototal >= 8)
    {
      let valortotal = valormac + valormor
      let desconto = valortotal - ((valortotal) * 0.1)
      console.log(`O valor total da compra foi de ${desconto}, com 10% de desconto`)
    }
    
}
else if (pesomor >= 5 && pesomor && pesomac >= 5 )
{
    let valormor = pesomor * 2.20
    let valormac = pesomac * 1.50
    console.log(`O valor total e de ${valormac + valormor}`)
    if (valormac + valormor > 25 || pesototal >= 8)
    {
      let valortotal = valormac + valormor
      let desconto = valortotal - ((valortotal) * 0.1)
      console.log(`O valor total da compra foi de ${desconto}, com 10% de desconto`)
    }
    
}
else if (pesomor >= 5 && pesomac < 5 )
{
    let valormor = pesomor * 2.20
    let valormac = pesomac * 1.80
    console.log(`O valor total e de ${valormac + valormor}`)
    if (valormac + valormor > 25 || pesototal >= 8)
    {
      let valortotal = valormac + valormor
      let desconto = valortotal - ((valortotal) * 0.1)
      console.log(`O valor total da compra foi de ${desconto}, com 10% de desconto`)
    }
    
}
else if (pesomac >= 5 && pesomor < 5 )
{
    let valormor = pesomor * 2.50
    let valormac = pesomac * 1.50
    console.log(`O valor total e de ${valormac + valormor}`)
    if (valormac + valormor > 25 || pesototal >= 8)
    {
      let valortotal = valormac + valormor
      let desconto = valortotal - ((valortotal) * 0.1)
      console.log(`O valor total da compra foi de ${desconto}, com 10% de desconto`)
    }
    
}