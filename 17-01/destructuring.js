/*
Destructuring é uma funcionalidade do JavaScript introduzida no ES6 que permite 
extrair valores de arrays ou propriedades de objetos em variáveis distintas de 
maneira mais concisa e legível. 
*/

//Destructuring Arrays
const array = [1, 2, 3];
const [a, b, c] = array;

console.log(a);
console.log(b);
console.log(c);
//---------------------------------------------------

//Destructuring Objects
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};

const { nome, idade, cidade } = pessoa;
console.log(nome);
console.log(idade);
console.log(cidade);
//---------------------------------------------------

//Valores padrão
const array2 = [1];
const [aA, bB = 2] = array2;

console.log(aA); // 1
console.log(bB); // 2

const pessoa2 = { nome2: "João" };
const { nome2, idade2 = 25 } = pessoa2;

console.log(nome2); // João
console.log(idade2); // 25
//---------------------------------------------------

//Destructuring em Funções
function exibirPessoa({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}

const pessoa3 = { nome: "João", idade: 30 };
exibirPessoa(pessoa3); // Nome: João, Idade: 30
