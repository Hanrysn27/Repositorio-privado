function verificaAnoBisexto (y) {
  return (y % 400 == 0) || (y % 4 == 0) &amp &amp (y % 100 != 0)
}