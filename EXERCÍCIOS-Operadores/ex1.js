/*
Crie um algoritmo que:
1) solicite um valor numérico ao usuário; 
2) acrescente 15% de desconto no valor aplicado; 
3) retorne o valor final em reais para o usuário.
*/

const valorUsuario = 3123123131

function formatador (valor){
    valorFormatado = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return valorFormatado
}

function calcPct (valor) {
    const valorMaisPct = ((valor * 15) /100)
    return (valorMaisPct + valor);
}

const valorFincalComJuros = calcPct(valorUsuario)

console.log(`Valor inicial = ${formatador(valorUsuario)}`)
console.log(`Valor do juros = ${formatador(valorFincalComJuros - valorUsuario)}`)
console.log(`Valor final + 15% = ${formatador(valorFincalComJuros)}`)