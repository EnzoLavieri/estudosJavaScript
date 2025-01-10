//Array
const array = [["1", "2", "3", "4", "5"]];
console.log(array[0][3]); // "4"

//Matriz (Array bidimensional)
let matriz = [
  [1, 2, 3], // Linha 0
  [4, 5, 6], // Linha 1
  [7, 8, 9], // Linha 2
];
console.log(matriz[0][1]); // Saída: 2 (linha 0, coluna 1)
console.log(matriz[2][2]); // Saída: 9 (linha 2, coluna 2)

//Array multidimensional
const arrayMultidimensional = [
  ["1", "2", "3", "4", "5"],
  ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
  ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
];
console.log(arrayMultidimensional[0][3]); // "4"
console.log(arrayMultidimensional[1][0]); // "Segunda"
console.log(arrayMultidimensional[2][0]); // "Janeiro"
