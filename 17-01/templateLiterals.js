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
// Traditional multi-line string
const multiLine = "Esta é a primeira linha.\nEsta é a segunda linha.";

// Using template literals
const multiLine2 = `Esta é a primeira linha.
Esta é a segunda linha.`;

console.log(multiLine);
console.log(multiLine2);
