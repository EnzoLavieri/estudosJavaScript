/* 
Hoisting são funções declaradas dessa forma são elevadas (hoisted) para o topo do escopo,
 o que significa que podem ser chamadas antes mesmo de serem definidas no código
*/

saudacoes();
function saudacoes() {
  console.log("saudacoes");
}

//--------------------------------------------------

// Expressão de função (não sofre hoisting)
const saudacao = function () {
  console.log("Olá, mundo!");
};
saudacao();

//--------------------------------------------------

function soma(a, b) {
  return a + b;
}

console.log(soma(3, 5)); // Saída: 8
