/*FOR é usado quando você sabe de antemão quantas vezes o loop precisa ser executado */
for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*WHILE executa um bloco de código enquanto a condição fornecida for verdadeira */
let i = 0;
while (i < 4) {
  console.log(i);
  i++;
}

/*DO WHILE é similar ao while, mas a condição é verificada após a execução do bloco de código */
//let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

/*forEach é uma função de array que executa uma função de callback em cada elemento do array */
const arr = [1, 2, 3];
//arr.forEach(element => console.log(element));
arr.forEach(function (element) {
  console.log(element);
});

//Loop aninhado simplesLoop aninhado simples, sem misterio
for (let i = 1; i < 4; i++) {
  console.log(`Iteração externa ${i}`);

  for (let k = 1; k < 3; k++) {
    console.log(`Iteração interna ${k}`);
  }
}
