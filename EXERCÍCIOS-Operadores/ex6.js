/*
O cliente de uma loja deseja saber a porcentagem de desconto aplicada dos produtos em promoção. Sendo assim, crie um algoritmo que: 
1) solicite o valor total do produto; 
2) solicite o valor com desconto; 
3) calcule o valor solicitado; 
4) retorne o valor final para o cliente.
*/

const valProdutoTotal = 480
const valorComDesconto = 430
const valorDesconto = valProdutoTotal - valorComDesconto

const porcentagemDesc = (valorDesconto / valProdutoTotal) * 100 

console.log(`Valor original: R$ ${valProdutoTotal}`);
console.log(`Valor com desconto: R$ ${valorComDesconto}`);
console.log(`Desconto aplicado: ${valorDesconto.toFixed(2)}%`);