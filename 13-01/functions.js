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
//--------------------------------------------------
/*
Função Anônima é uma função que não possui um nome explícito. Elas são frequentemente 
usadas quando uma função não precisa ser referenciada em vários lugares do código, como em 
callbacks ou atribuições diretas a variáveis.
*/
const saudacaoo = function (nome) {
  return `Olá, ${nome}!`;
};

console.log(saudacaoo("Lucas"));

/*
  Com Arrow Functions, podemos reescrever a função anônima de forma mais concisa:
*/
const saudacaooo = (nome) => `Olá, ${nome}!`;

console.log(saudacaooo("Lucas"));

//--------------------------------------------------

/*
 **** Callback é uma função passada como argumento para outra função, para ser executada posteriormente.
 */
function processarEntrada(usuario, callback) {
  console.log(`Processando usuário: ${usuario}`);
  callback();
}

processarEntrada("Lucas", function () {
  console.log("Usuário processado com sucesso!");
});

/*
Callbacks com Arrow Functions
*/
function processarEntrada(usuario, callback) {
  console.log(`Processando usuário: ${usuario}`);
  callback();
}
processarEntrada("Joao", () => console.log("Usuário processado com sucesso!"));
