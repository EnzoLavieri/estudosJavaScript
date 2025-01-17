/*
Os Template Literals (ou Template Strings) são uma funcionalidade do JavaScript 
introduzida no ES6 que permite criar strings de forma mais dinâmica e legível. 
Em vez de usar aspas simples (' ') ou duplas (" "), utilizamos crases (` `). 
*/

//--Sintaxe Básica
//com concatenacao:
const nome = "João";
const mensagem = "Olá, " + nome + "! Bem-vindo!";
console.log(mensagem);

//usando Template Literals
const nome2 = "João";
const mensagem2 = `Olá, ${nome2}! Bem-vindo!`;
console.log(mensagem2);
//Vantagens: Mais legibilidade e menos concatenação com +

//--Multi-line Strings
//tradicional multi-line string
const multiLine = "Esta é a primeira linha.\nEsta é a segunda linha.";

//usando template literals
const multiLine2 = `Esta é a primeira linha.
Esta é a segunda linha.`;

console.log(multiLine);
console.log(multiLine2);

//--Expressoes integradas
const a = 5;
const b = 10;
const nomeEI = "João";
console.log(`A soma de ${a} e ${b} é ${a + b}.`);

//--Exemplo de Tagged Template
function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
  return "Tagged template result";
}

const result = tag`Ola ${nomeEI}, voce tem ${a + b} novas mensagens.`;
console.log(result);
