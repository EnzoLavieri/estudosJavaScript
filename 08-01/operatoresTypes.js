let x = 20;
let y = "38";
let temCarteira = true;

// Operadores Aritméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); // Resto da divisao
console.log(x ** y); // Exponenciação, onde x é a base e y o expoente
console.log("");

// Operadores de Comparação
console.log(x == y); // Igualdade, JS converte a string para numero pq ve que nao tem int e faz a comparacao, true
console.log(x === y); // Igualdade estrita, numero e string, tipos diferentes, falso
console.log(x != y); // Diferente
console.log(x !== y); // Diferente estrita, mesma logica anteriror
console.log(x < y);
console.log(x > y);
console.log(x >= y);
console.log(x <= y);
console.log("");

// Operadores Lógicos
let idade = 20;

console.log(idade >= 18 && temCarteira); // && -> "e", true (maior de idade e tem carteira)
console.log(idade >= 18 || temCarteira); // || -> "ou", true (pelo menos uma condição é verdadeira)
console.log(!(idade >= 18)); // ! -> inverte para falso o resultado, false (negação da condição)
