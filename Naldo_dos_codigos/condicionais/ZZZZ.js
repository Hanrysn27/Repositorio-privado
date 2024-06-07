if (pesomor <5 && pesomac < 5)
{
    let valormor = pesomor * 2.50
    let valormac = pesomac * 1.80
    console.log(`O valor total e de ${valormac + valormor}`)
    if (valormac + valormor > 25)
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
    if (valormac + valormor > 25)
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
    if (valormac + valormor > 25)
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
    if (valormac + valormor > 25)
    {
      let valortotal = valormac + valormor
      let desconto = valortotal - ((valortotal) * 0.1)
      console.log(`O valor total da compra foi de ${desconto}, com 10% de desconto`)
    }
    
}