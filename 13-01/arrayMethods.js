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

// ----- Métodos de Iteração e Transformação -----

// forEach() – Itera sobre os elementos do array
let nomes = ["Ana", "Bruno", "Carlos"];
nomes.forEach((nome) => console.log(nome));

//map() – Cria um novo array transformando cada elemento
let numerosDobrados = [1, 2, 3].map((num) => num * 2);
console.log(numerosDobrados);

//filter() – Cria um novo array com elementos que passam no teste
let numMaioresQueDois = [1, 2, 3, 4, 5].filter((num) => num > 2);
console.log(numMaioresQueDois);

//reduce() – Reduz o array a um único valor
let soma = [1, 2, 3, 4, 5].reduce((acumulador, num) => acumulador + num, 0);
console.log(soma);

//find() – Retorna o primeiro elemento que atende a uma condição
let primMaiorQueDois = [1, 2, 3, 4, 5].find((num) => num > 2);
console.log(primMaiorQueDois);

// findIndex() – Retorna o índice do primeiro elemento que atende a uma condição
let indice = [1, 2, 3, 4, 5].findIndex((num) => num > 2);
console.log(indice);

//some() – Retorna true se pelo menos um elemento passar no teste
let temMaiorQue3 = [1, 2, 3, 4].some((num) => num > 3);
console.log(temMaiorQue3);

//every() – Retorna true se todos os elementos passarem no teste
let todosMaioresQue0 = [-1, 1, 2, 3].every((num) => num > 0);
console.log(todosMaioresQue0); // true
