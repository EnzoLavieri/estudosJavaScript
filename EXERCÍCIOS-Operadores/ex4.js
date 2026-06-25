/*
De acordo com o resultado do exercício 3, crie um algoritmo que:
1) solicite o resultado do exercício 3; 
2) transforme o resultado em um valor de anos, meses e dias e; 
3) retorne o valor final para o usuário.
*/

// exercicio 3 
const idade = 22
const idadeEmDias = idade * 365

console.log(`Você tem ${idade} anos e está vivo há ${idadeEmDias} dias`)

// exercicio 4
const totalDias = idadeEmDias

const diasRestantes = totalDias % 365

const anos = Math.floor(totalDias / 365)
const meses = Math.floor(diasRestantes / 30)
const dias = diasRestantes % 30

console.log(`Você tem aproximadamente ${anos} anos, ${meses} meses e ${dias} dias de vida`)