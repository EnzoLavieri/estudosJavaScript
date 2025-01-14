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

// ----- Métodos de Ordenação e Modificação -----

//sort() – Ordena os elementos do array
// --> ALTERA O ARRAY ORIGINAL <--
let letras = ["d", "b", "a", "c"];
letras.sort();
console.log(letras); // ["a", "b", "c", "d"]

//reverse() – Inverte a ordem dos elementos
let numerosReverso = [1, 2, 3].reverse();
console.log(numerosReverso); // [3, 2, 1]

// ----- Métodos de Extração e Combinação -----

//slice() – Retorna uma cópia de parte do array
let subArray = [1, 2, 3, 4, 5, 6, 7].slice(0, 4);
console.log(subArray); // [1, 2, 3, 4]

//concat() – Junta dois ou mais arrays
let array1 = [1, 2];
let array2 = [3, 4];
let combinado = array1.concat(array2);
console.log(combinado); // [1, 2, 3, 4]

//join() – Transforma o array em uma string separada por um delimitador
let palavras = ["Olá", "mundo"];
console.log(palavras.join(" ")); // "Olá mundo"

// ----- Outros Métodos Úteis -----

//includes() – Verifica se um valor está no array
let temBanana = ["maçã", "banana", "laranja"].includes("banana");
console.log(temBanana); // true

//indexOf() – Retorna o índice do primeiro elemento encontrado
let indiceBanana = ["maçã", "banana", "laranja"].indexOf("banana");
console.log(indiceBanana); // 1

//lastIndexOf() – Retorna o índice da última ocorrência de um elemento
let indices = [1, 2, 3, 2, 1].lastIndexOf(2);
console.log(indices); // 3
