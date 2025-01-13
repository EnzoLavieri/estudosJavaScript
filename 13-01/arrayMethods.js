// ----- Métodos de Adição e Remoção -----

//push() – Adiciona elementos ao final do array
let numeros = [1, 2, 3];
numeros.push(4, 5);
console.log(numeros);

//pop() – Remove o último elemento do array
numeros.pop();
console.log(numeros);

//unshift() – Adiciona elementos no início do array
numeros.unshift(0);
console.log(numeros);

//shift() – Remove o primeiro elemento do array
numeros.shift();
console.log(numeros);

//splice() – Adiciona, remove ou substitui elementos no array
//O primeiro número indica a posição inicial,
//o segundo a quantidade de elementos a remover
//e o terceiro (opcional) o que será adicionado.
let frutas = ["maçã", "banana", "laranja"];
frutas.splice(1, 1, "uva");
console.log(frutas); // ["maçã", "uva", "laranja"]
